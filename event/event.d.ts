export declare const isMouseEvent: (event: MouseEvent | TouchEvent) => event is MouseEvent;
export declare const isTouchEvent: (event: MouseEvent | TouchEvent) => event is TouchEvent;
export declare const getPosition: (event: MouseEvent | TouchEvent) => {
    clientX: number;
    clientY: number;
};
