import '../utils/click/isClickableInput.js';
import { writeDataTransferToClipboard } from '../utils/dataTransfer/Clipboard.js';
import '../utils/edit/isEditable.js';
import '../utils/edit/maxLength.js';
import '@testing-library/dom/dist/helpers.js';
import '../utils/keyDef/readNextDescriptor.js';
import '../utils/misc/level.js';
import '../options.js';
import { copySelection } from '../document/copySelection.js';

async function copy() {
    const doc = this.config.document;
    var _activeElement;
    const target = (_activeElement = doc.activeElement) !== null && _activeElement !== void 0 ? _activeElement : /* istanbul ignore next */ doc.body;
    const clipboardData = copySelection(target);
    if (clipboardData.items.length === 0) {
        return;
    }
    if (this.dispatchUIEvent(target, 'copy', {
        clipboardData
    }) && this.config.writeToClipboard) {
        await writeDataTransferToClipboard(doc, clipboardData);
    }
    return clipboardData;
}

export { copy };
