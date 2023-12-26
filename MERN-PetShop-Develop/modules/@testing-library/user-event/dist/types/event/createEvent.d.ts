import type { EventType, EventTypeInit, FixedDocumentEventMap } from './types';
export declare function createEvent<K extends EventType>(type: K, target: Element, init?: EventTypeInit<K>): FixedDocumentEventMap[K];
