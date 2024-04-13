import { MutableRefObject } from 'react';
export declare function useLinkedRef<T>(): [
    MutableRefObject<T | undefined>,
    () => T | undefined,
    (data: T) => void
];
export declare function useLinkedRef<T>(initial: T | null): [MutableRefObject<T>, () => T, (data: T) => void];
