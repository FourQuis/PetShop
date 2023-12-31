import { getUISelection } from '../../document/UI.js';
import '../../utils/click/isClickableInput.js';
import '../../utils/dataTransfer/Clipboard.js';
import '../../utils/edit/isEditable.js';
import '../../utils/edit/maxLength.js';
import { getNextCursorPosition } from '../../utils/focus/cursor.js';
import '@testing-library/dom/dist/helpers.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';
import '../../utils/keyDef/readNextDescriptor.js';
import '../../utils/misc/level.js';
import '../../options.js';
import { setSelection } from './setSelection.js';

/**
 * Move the selection
 */ function moveSelection(node, direction) {
    // TODO: implement shift
    if (hasOwnSelection(node)) {
        const selection = getUISelection(node);
        setSelection({
            focusNode: node,
            focusOffset: selection.startOffset === selection.endOffset ? selection.focusOffset + direction : direction < 0 ? selection.startOffset : selection.endOffset
        });
    } else {
        const selection1 = node.ownerDocument.getSelection();
        if (!(selection1 === null || selection1 === void 0 ? void 0 : selection1.focusNode)) {
            return;
        }
        if (selection1.isCollapsed) {
            const nextPosition = getNextCursorPosition(selection1.focusNode, selection1.focusOffset, direction);
            if (nextPosition) {
                setSelection({
                    focusNode: nextPosition.node,
                    focusOffset: nextPosition.offset
                });
            }
        } else {
            selection1[direction < 0 ? 'collapseToStart' : 'collapseToEnd']();
        }
    }
}

export { moveSelection };
