import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class ContentService {
    /**
     * Delete selected element
     */
    public deleteElement(target): void {
        target.remove();
    }

    /**
     * Transform color to hex
     * @param c for color in rgb
     */
    private _componentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    /**
     * Transform rba to hex
     * @param r red
     * @param g green
     * @param b blue
     */
    private _rgbToHex(r: number, g: number, b: number): string {
        if (
        (r !== null && !isNaN(r)) &&
        (g !== null && !isNaN(g)) &&
        (b !== null && !isNaN(b))
        ) {
        return (
            '#' +
            this._componentToHex(r) +
            this._componentToHex(g) +
            this._componentToHex(b)
        );
        }
    }

    /**
     * Inovke the private method with the same name.
     * @param r red
     * @param g green
     * @param b bluue
     */
    public rgbToHex(rgb: string) {
        if (!rgb) {
        return;
        }

        const rgbArray: string[] = rgb
        .substring(4, rgb.length - 1)
        .replace(/ /g, '')
        .split(',');

        /**
         * Second parameter of pareseInt is
         * base in mathematical numeral systems
         * Example:
         * - 10 for deciamal numeral system
         * - 2 for binary numeral system and so on.
         */
        const r = parseInt(rgbArray[0], 10);
        const g = parseInt(rgbArray[1], 10);
        const b = parseInt(rgbArray[2], 10);

        return this._rgbToHex(r, g, b);
    }
}
