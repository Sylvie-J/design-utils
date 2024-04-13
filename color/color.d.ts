import { HSLAColor, HSVAColor, RGBAColor } from './types';
export default class Color {
    private _color;
    private _alpha;
    constructor(color: string | RGBAColor | HSLAColor | HSVAColor);
    alpha(alpha: number): this;
    white(): number;
    darken(ratio: number): this;
    whiten(ratio: number): this;
    blacken(ratio: number): this;
    toHwb(): {
        h: number;
        w: number;
        b: number;
    };
    toHsl(): {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    toRgbString(): string;
    toHex(): string;
}
