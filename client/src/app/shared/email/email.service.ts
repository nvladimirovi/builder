import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class EmailService {
  private _event_targets = '.result table, .result tr, .result td, .result a, .result p, .result img, .result font';
  private _selected_element;

  /**
   * Get the x, y position of the
   * element.
   * @param event
   */
  private _getElementPosition(event) {
    const leftPos = $(event.currentTarget).offset().left;
    const rightPos = leftPos + $(event.currentTarget).width();

    const topPos = $(event.currentTarget).offset().top;
    const bottomPos = topPos + $(event.currentTarget).height();
  }

  /**
   * Draw the grid lines.
   */
  private _drawGrid() {
    const self = this;

    $(self._event_targets).hover(function(event) {
      event.preventDefault();
      event.stopPropagation();

      const element = $(this);

      $('.ng_hovered_item').removeClass('ng_hovered_item');

      element.addClass('ng_hovered_item');
    });
  }

  /**
   * Selects elements.
   */
  private _selectElement() {
    const self = this;

    $(self._event_targets).on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      $('.ng_selected_item').removeClass('ng_selected_item');

      const element = $(this);

      element.addClass('ng_selected_item');

      self.selected_element = element;
    });
  }

  /**
   * Return the encapsulated function.
   */
  public drawGrid() {
    return this._drawGrid();
  }

  /**
   * Return the encapsulated function.
   */
  public selectElement() {
    return this._selectElement();
  }

  /**
   * Get the selected element
   */
  public get selected_element() {
    return this._selected_element;
  }

  /**
   * Set selected element
   */
  public set selected_element(value) {
    if (value) {
      this._selected_element = value;
      console.log('EmailService', value);
    }
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
  private _rgbToHex(r: number, g: number , b: number): string {
    if (r !== null && g !== null && b !== null) {
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
    if (!rgb) { return; }
    console.log('called');

    const rgbArray: string[] = rgb.substring(4, rgb.length - 1)
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
