import '../utils/click/isClickableInput.js';
import '../utils/dataTransfer/Clipboard.js';
import '../utils/edit/isEditable.js';
import '../utils/edit/maxLength.js';
import { getWindow } from '../utils/misc/getWindow.js';
import '../utils/keyDef/readNextDescriptor.js';
import '../utils/misc/level.js';
import '../options.js';
import { setUIValueClean, setUISelection, hasUISelection } from './UI.js';

const TrackChanges = Symbol('Track programmatic changes for React workaround');
// When the input event happens in the browser, React executes all event handlers
// and if they change state of a controlled value, nothing happens.
// But when we trigger the event handlers in test environment with React@17,
// the changes are rolled back before the state update is applied.
// This results in a reset cursor.
// There might be a better way to work around if we figure out
// why the batched update is executed differently in our test environment.
function isReact17Element(element) {
    return Object.getOwnPropertyNames(element).some((k)=>k.startsWith('__react')) && getWindow(element).REACT_VERSION === 17;
}
function startTrackValue(element) {
    if (!isReact17Element(element)) {
        return;
    }
    element[TrackChanges] = {
        previousValue: String(element.value),
        tracked: []
    };
}
function trackOrSetValue(element, v) {
    var ref, ref1;
    (ref = element[TrackChanges]) === null || ref === void 0 ? void 0 : (ref1 = ref.tracked) === null || ref1 === void 0 ? void 0 : ref1.push(v);
    if (!element[TrackChanges]) {
        setUIValueClean(element);
        setUISelection(element, {
            focusOffset: v.length
        });
    }
}
function commitValueAfterInput(element, cursorOffset) {
    var ref;
    const changes = element[TrackChanges];
    element[TrackChanges] = undefined;
    if (!(changes === null || changes === void 0 ? void 0 : (ref = changes.tracked) === null || ref === void 0 ? void 0 : ref.length)) {
        return;
    }
    const isJustReactStateUpdate = changes.tracked.length === 2 && changes.tracked[0] === changes.previousValue && changes.tracked[1] === element.value;
    if (!isJustReactStateUpdate) {
        setUIValueClean(element);
    }
    if (hasUISelection(element)) {
        setUISelection(element, {
            focusOffset: isJustReactStateUpdate ? cursorOffset : element.value.length
        });
    }
}

export { commitValueAfterInput, startTrackValue, trackOrSetValue };
