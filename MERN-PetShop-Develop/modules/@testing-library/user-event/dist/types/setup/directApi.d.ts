import type { Options } from '../options';
import type { PointerInput } from '../pointer';
import type { System } from '../system';
import type { UserEventApi } from './setup';
export declare type DirectOptions = Options & {
    keyboardState?: System;
    pointerState?: System;
};
export declare function clear(element: Element): Promise<void>;
export declare function click(element: Element, options?: DirectOptions): Promise<void>;
export declare function copy(options?: DirectOptions): Promise<DataTransfer | undefined>;
export declare function cut(options?: DirectOptions): Promise<DataTransfer | undefined>;
export declare function dblClick(element: Element, options?: DirectOptions): Promise<void>;
export declare function deselectOptions(select: Element, values: HTMLElement | HTMLElement[] | string[] | string, options?: DirectOptions): Promise<void>;
export declare function hover(element: Element, options?: DirectOptions): Promise<void>;
export declare function keyboard(text: string, options?: DirectOptions): Promise<System>;
export declare function pointer(input: PointerInput, options?: DirectOptions): Promise<System>;
export declare function paste(clipboardData?: DataTransfer | string, options?: DirectOptions): Promise<void>;
export declare function selectOptions(select: Element, values: HTMLElement | HTMLElement[] | string[] | string, options?: DirectOptions): Promise<void>;
export declare function tripleClick(element: Element, options?: DirectOptions): Promise<void>;
export declare function type(element: Element, text: string, options?: DirectOptions & Parameters<UserEventApi['type']>[2]): Promise<void>;
export declare function unhover(element: Element, options?: DirectOptions): Promise<void>;
export declare function upload(element: HTMLElement, fileOrFiles: File | File[], options?: DirectOptions): Promise<void>;
export declare function tab(options?: DirectOptions & Parameters<UserEventApi['tab']>[0]): Promise<void>;