import { FC, HTMLAttributes, ReactNode } from 'react';
import type { Triggers } from '../../types';
export interface CTooltipProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component.
     */
    className?: string;
    /**
     * Content node for your component.
     */
    content: ReactNode | string;
    /**
     * Offset of the popover relative to its target.
     */
    offset?: [number, number];
    /**
     * Callback fired when the component requests to be hidden.
     */
    onHide?: () => void;
    /**
     * Callback fired when the component requests to be shown.
     */
    onShow?: () => void;
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @type 'hover' | 'focus' | 'click'
     */
    trigger?: Triggers | Triggers[];
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     */
    placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * Toggle the visibility of popover component.
     */
    visible?: boolean;
}
export declare const CTooltip: FC<CTooltipProps>;