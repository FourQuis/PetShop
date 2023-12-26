'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/click/isClickableInput.js');
require('../../utils/dataTransfer/Clipboard.js');
require('../../utils/edit/isEditable.js');
require('../../utils/edit/maxLength.js');
require('@testing-library/dom/dist/helpers.js');
require('../../utils/keyDef/readNextDescriptor.js');
var getTreeDiff = require('../../utils/misc/getTreeDiff.js');
require('../../utils/misc/level.js');
var cssPointerEvents = require('../../utils/pointer/cssPointerEvents.js');
var shared = require('./shared.js');

class Pointer {
    init(instance, position) {
        this.position = position;
        const target = this.getTarget(instance);
        const [, enter] = getTreeDiff.getTreeDiff(null, target);
        const init = this.getEventInit();
        cssPointerEvents.assertPointerEvents(instance, target);
        instance.dispatchUIEvent(target, 'pointerover', init);
        enter.forEach((el)=>instance.dispatchUIEvent(el, 'pointerenter', init));
        return this;
    }
    move(instance, position) {
        const prevPosition = this.position;
        const prevTarget = this.getTarget(instance);
        this.position = position;
        if (!shared.isDifferentPointerPosition(prevPosition, position)) {
            return;
        }
        const nextTarget = this.getTarget(instance);
        const init = this.getEventInit();
        const [leave, enter] = getTreeDiff.getTreeDiff(prevTarget, nextTarget);
        return {
            leave: ()=>{
                if (cssPointerEvents.hasPointerEvents(instance, prevTarget)) {
                    if (prevTarget !== nextTarget) {
                        instance.dispatchUIEvent(prevTarget, 'pointerout', init);
                        leave.forEach((el)=>instance.dispatchUIEvent(el, 'pointerleave', init));
                    }
                }
            },
            enter: ()=>{
                cssPointerEvents.assertPointerEvents(instance, nextTarget);
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(nextTarget, 'pointerover', init);
                    enter.forEach((el)=>instance.dispatchUIEvent(el, 'pointerenter', init));
                }
            },
            move: ()=>{
                instance.dispatchUIEvent(nextTarget, 'pointermove', init);
            }
        };
    }
    down(instance, _keyDef) {
        if (this.isDown) {
            return;
        }
        const target = this.getTarget(instance);
        cssPointerEvents.assertPointerEvents(instance, target);
        this.isDown = true;
        this.isPrevented = !instance.dispatchUIEvent(target, 'pointerdown', this.getEventInit());
    }
    up(instance, _keyDef) {
        if (!this.isDown) {
            return;
        }
        const target = this.getTarget(instance);
        cssPointerEvents.assertPointerEvents(instance, target);
        this.isDown = false;
        instance.dispatchUIEvent(target, 'pointerup', this.getEventInit());
    }
    release(instance) {
        const target = this.getTarget(instance);
        const [leave] = getTreeDiff.getTreeDiff(target, null);
        const init = this.getEventInit();
        // Currently there is no PointerEventsCheckLevel that would
        // make this check not use the *asserted* cached value from `up`.
        /* istanbul ignore else */ if (cssPointerEvents.hasPointerEvents(instance, target)) {
            instance.dispatchUIEvent(target, 'pointerout', init);
            leave.forEach((el)=>instance.dispatchUIEvent(el, 'pointerleave', init));
        }
        this.isCancelled = true;
    }
    getTarget(instance) {
        var _target;
        return (_target = this.position.target) !== null && _target !== void 0 ? _target : instance.config.document.body;
    }
    getEventInit() {
        return {
            ...this.position.coords,
            pointerId: this.pointerId,
            pointerType: this.pointerType,
            isPrimary: this.isPrimary
        };
    }
    constructor({ pointerId , pointerType , isPrimary  }){
        this.isMultitouch = false;
        this.isCancelled = false;
        this.isDown = false;
        this.isPrevented = false;
        this.position = {};
        this.pointerId = pointerId;
        this.pointerType = pointerType;
        this.isPrimary = isPrimary;
        this.isMultitouch = !isPrimary;
    }
}

exports.Pointer = Pointer;
