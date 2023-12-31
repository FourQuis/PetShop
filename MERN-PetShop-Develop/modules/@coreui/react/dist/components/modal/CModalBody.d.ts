import React, { HTMLAttributes } from 'react';
export interface CModalBodyProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component.
     */
    className?: string;
}
export declare const CModalBody: React.ForwardRefExoticComponent<CModalBodyProps & React.RefAttributes<HTMLDivElement>>;
