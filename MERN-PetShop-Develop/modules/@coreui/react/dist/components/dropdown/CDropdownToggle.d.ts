import { FC } from 'react';
import { CButtonProps } from '../button/CButton';
import type { Triggers } from '../../types';
export interface CDropdownToggleProps extends Omit<CButtonProps, 'type'> {
    /**
     * Enables pseudo element caret on toggler.
     */
    caret?: boolean;
    /**
     * Create a custom toggler which accepts any content.
     */
    custom?: boolean;
    /**
     * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
     */
    split?: boolean;
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @type 'hover' | 'focus' | 'click'
     */
    trigger?: Triggers | Triggers[];
}
export declare const CDropdownToggle: FC<CDropdownToggleProps>;
