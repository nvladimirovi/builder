import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class EmailService {
  private _event_targets = '.result table, .result tr, .result td, .result a, .result p, .result img, .result font';
  private _selected_element;

  get event_targets() {
    return this._event_targets;
  }

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

    $('body').on('mouseover', self._event_targets, function(event) {
      event.preventDefault();
      event.stopPropagation();

      const element = $(this);

      $('.ng_hovered_item').removeClass('ng_hovered_item');

      element.addClass('ng_hovered_item');
    });
  }

  /**
   * Return the encapsulated function.
   */
  public drawGrid() {
    return this._drawGrid();
  }

  /**
   * Selects elements.
   */
  private _selectElement() {
    const self = this;

    $('body').on('click', self._event_targets, function(event) {
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
   * Delete selected element
   */
  public deleteElement() {
    this.selected_element.remove();
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

  /**
   * Fired when an element or
   * text selection is being
   * dragged over a valid drop
   * target (every few hundred milliseconds).
   */
  public dragOver() {
    $('body').on('dragover', this.event_targets, function(event) {
      if (!$(this).hasClass('ng_selected_item') || $(this).is('img')) { return; }
      event.preventDefault();
    });
  }

  /**
   * Fired when a dragged element or
   * text selection enters a valid drop target.
   */
  public dragEnter() {
    $('body').on('dragenter', this.event_targets, function(event) {
      event.stopPropagation();
    });
  }

  /**
   * Fired when a drag operation is
   * being ended (for example,
   * by releasing a mouse button
   * or hitting the escape key).
   */
  public dragEnd() {
    $('body').on('dragend', this.event_targets, function(event) {
      event.stopPropagation();

      if (!$(this).hasClass('ng_selected_item')) {
        $(this).remove();
      }
    });
  }

  /**
   * Fired when a dragged element or
   * text selection leaves a valid drop target.
   */
  public dragLeave() {}

  /**
   * Fired when the user starts dragging an
   * element or text selection.
   */
  public dragStart() {}

  /**
   * Inser the new element before or
   * after the selected element.
   */
  public drop() {
    $('body').on('drop', this.event_targets, function(event) {
      event.preventDefault();
      event.stopPropagation();

      const data = event.originalEvent.dataTransfer.getData('text/html');

      if (event.originalEvent.offsetY <= $(this).height() / 2) {
        $(data).insertBefore($(this));
      } else {
        $(this).parent().append(data);
      }
    });
  }

  /**
   * Bind the drag event to predefined blocks.
   * @param event
   */
  public drag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event
      .dataTransfer
      .setData(
        'text/html',
        '<font style="font-family:Roboto, Tahoma, sans-serif;color:#fff;font-size:15px;font-weight:300;">Example paragraph</p>'
      );
    event.dataTransfer.setData('text/uri-list', 'http://developer.mozilla.org');
  }
}
