import '../../event/behavior/click.js';
import '../../event/behavior/cut.js';
import '../../event/behavior/keydown.js';
import '../../event/behavior/keypress.js';
import '../../event/behavior/keyup.js';
import '../../event/behavior/paste.js';
import '@testing-library/dom';
import '../../event/eventMap.js';
import '../../utils/click/isClickableInput.js';
import '../../utils/dataTransfer/Clipboard.js';
import '../../utils/edit/isEditable.js';
import '../../utils/edit/maxLength.js';
import { isDisabled } from '../../utils/misc/isDisabled.js';
import '@testing-library/dom/dist/helpers.js';
import '../../utils/keyDef/readNextDescriptor.js';
import { getTreeDiff } from '../../utils/misc/getTreeDiff.js';
import '../../utils/misc/level.js';
import '../../options.js';
import { focusElement } from '../../event/focus.js';
import { setSelectionPerMouseDown } from '../../event/selection/setSelectionPerMouse.js';
import { modifySelectionPerMouseMove } from '../../event/selection/modifySelectionPerMouse.js';
import { getMouseEventButton, Buttons } from './buttons.js';
import { isDifferentPointerPosition } from './shared.js';

/**
 * This object is the single "virtual" mouse that might be controlled by multiple different pointer devices.
 */ class Mouse {
    move(instance, position) {
        const prevPosition = this.position;
        const prevTarget = this.getTarget(instance);
        this.position = position;
        if (!isDifferentPointerPosition(prevPosition, position)) {
            return;
        }
        const nextTarget = this.getTarget(instance);
        const init = this.getEventInit('mousemove');
        const [leave, enter] = getTreeDiff(prevTarget, nextTarget);
        return {
            leave: ()=>{
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(prevTarget, 'mouseout', init);
                    leave.forEach((el)=>instance.dispatchUIEvent(el, 'mouseleave', init));
                }
            },
            enter: ()=>{
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(nextTarget, 'mouseover', init);
                    enter.forEach((el)=>instance.dispatchUIEvent(el, 'mouseenter', init));
                }
            },
            move: ()=>{
                instance.dispatchUIEvent(nextTarget, 'mousemove', init);
                this.modifySelecting(instance);
            }
        };
    }
    down(instance, keyDef, pointer) {
        const button = this.buttons.down(keyDef);
        if (button === undefined) {
            return;
        }
        const target = this.getTarget(instance);
        this.buttonDownTarget[button] = target;
        const disabled = isDisabled(target);
        const init = this.getEventInit('mousedown', keyDef.button);
        if (disabled || instance.dispatchUIEvent(target, 'mousedown', init)) {
            this.startSelecting(instance, init.detail);
            focusElement(target);
        }
        if (!disabled && getMouseEventButton(keyDef.button) === 2) {
            instance.dispatchUIEvent(target, 'contextmenu', this.getEventInit('contextmenu', keyDef.button, pointer));
        }
    }
    up(instance, keyDef, pointer) {
        const button = this.buttons.up(keyDef);
        if (button === undefined) {
            return;
        }
        const target = this.getTarget(instance);
        if (!isDisabled(target)) {
            instance.dispatchUIEvent(target, 'mouseup', this.getEventInit('mouseup', keyDef.button));
            this.endSelecting();
            const clickTarget = getTreeDiff(this.buttonDownTarget[button], target)[2][0];
            if (clickTarget) {
                const init = this.getEventInit('click', keyDef.button, pointer);
                if (init.detail) {
                    instance.dispatchUIEvent(clickTarget, init.button === 0 ? 'click' : 'auxclick', init);
                    if (init.button === 0 && init.detail === 2) {
                        instance.dispatchUIEvent(clickTarget, 'dblclick', {
                            ...this.getEventInit('dblclick', keyDef.button),
                            detail: init.detail
                        });
                    }
                }
            }
        }
    }
    resetClickCount() {
        this.clickCount.reset();
    }
    getEventInit(type, button, pointer) {
        const init = {
            ...this.position.coords
        };
        if (pointer) {
            init.pointerId = pointer.pointerId;
            init.pointerType = pointer.pointerType;
            init.isPrimary = pointer.isPrimary;
        }
        init.button = getMouseEventButton(button);
        init.buttons = this.buttons.getButtons();
        if (type === 'mousedown') {
            init.detail = this.clickCount.getOnDown(init.button);
        } else if (type === 'mouseup') {
            init.detail = this.clickCount.getOnUp(init.button);
        } else if (type === 'click' || type === 'auxclick') {
            init.detail = this.clickCount.incOnClick(init.button);
        }
        return init;
    }
    getTarget(instance) {
        var _target;
        return (_target = this.position.target) !== null && _target !== void 0 ? _target : instance.config.document.body;
    }
    startSelecting(instance, clickCount) {
        var ref, ref1;
        // TODO: support extending range (shift)
        this.selecting = setSelectionPerMouseDown({
            document: instance.config.document,
            target: this.getTarget(instance),
            node: (ref = this.position.caret) === null || ref === void 0 ? void 0 : ref.node,
            offset: (ref1 = this.position.caret) === null || ref1 === void 0 ? void 0 : ref1.offset,
            clickCount
        });
    }
    modifySelecting(instance) {
        var ref, ref1;
        if (!this.selecting) {
            return;
        }
        modifySelectionPerMouseMove(this.selecting, {
            document: instance.config.document,
            target: this.getTarget(instance),
            node: (ref = this.position.caret) === null || ref === void 0 ? void 0 : ref.node,
            offset: (ref1 = this.position.caret) === null || ref1 === void 0 ? void 0 : ref1.offset
        });
    }
    endSelecting() {
        this.selecting = undefined;
    }
    constructor(){
        this.position = {};
        this.buttons = new Buttons();
        this.buttonDownTarget = {};
        // According to spec the `detail` on click events should be the number
        // of *consecutive* clicks with a specific button.
        // On `mousedown` and `mouseup` it should be this number increased by one.
        // But the browsers don't implement it this way.
        // If another button is pressed,
        //   in Webkit: the `mouseup` on the previously pressed button has `detail: 0` and no `click`/`auxclick`.
        //   in Gecko: the `mouseup` and click events have the same detail as the `mousedown`.
        // If there is a delay while a button is pressed,
        // the `mouseup` and `click` are normal, but a following `mousedown` starts a new click count.
        // We'll follow the minimal implementation of Webkit.
        this.clickCount = new class {
            incOnClick(button) {
                const current = this.down[button] === undefined ? undefined : Number(this.down[button]) + 1;
                this.count = this.count[button] === undefined ? {} : {
                    [button]: Number(this.count[button]) + 1
                };
                return current;
            }
            getOnDown(button) {
                var _button;
                this.down = {
                    [button]: (_button = this.count[button]) !== null && _button !== void 0 ? _button : 0
                };
                var _button1;
                this.count = {
                    [button]: (_button1 = this.count[button]) !== null && _button1 !== void 0 ? _button1 : 0
                };
                return Number(this.count[button]) + 1;
            }
            getOnUp(button) {
                return this.down[button] === undefined ? undefined : Number(this.down[button]) + 1;
            }
            reset() {
                this.count = {};
            }
            constructor(){
                this.down = {};
                this.count = {};
            }
        }();
    }
}

export { Mouse };
