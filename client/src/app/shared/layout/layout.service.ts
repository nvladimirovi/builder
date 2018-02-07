import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class LayoutService {
  private _blocks_map = new Map<string, string>();
  private _isBlock: boolean;
  private _position: boolean;

  /**
   * Get position
   */
  get position(): boolean {
    return this._position;
  }

  /**
   * Set position
   */

  set position(value: boolean) {
    this._position = value;
  }

  /**
   * Get blocks
   */
  public get blocks() {
    return this._blocks_map;
  }

  /**
   * Get isBlock
   */
  get isBlock(): boolean {
    return this._isBlock;
  }

  /**
   * Set isBlock
   */
  set isBlock(value: boolean) {
    this._isBlock = value;
  }

  /**
   * Load blocks
   */
  private _loadBlocks() {
    this.blocks.set(
      "header",
      "<table width='600' class='eb-module eb-module-empty' cellpadding='0' cellspaceing='0'><tr><td valign='top' align='left'></td></tr></table>"
    );
    this.blocks.set(
      "two-columns",
      "<!-- Max-width, bg color -> dynamic (Change this accordingly) -->" +
        "<!--[if (gte mso 9)|(IE)]>" +
        "<table class='eb-editable eb-module eb-module-empty' width='600' cellpadding='0' cellspacing='0' border='0' bgcolor='#c4e09b'>" +
        "<tr><td><![endif]-->" +
        "<table cellpadding='0' cellspacing='0' border='0' style='width: 100%; max-width: 600px;' bgcolor='#c4e09b'><!-- Max-width, bg color -> dynamic -->" +
        "<tr><td align='left' style='padding: 30px;'> <!-- Padding dynamic -->" +
        "<table cellpadding='0' cellspacing='0' border='0' width='100%' class='row'>" +
        "<tr>" +
        "<td align='left' valign='middle' width='50%' class='column'><!-- Align, Valign, width -> Dynamic -->" +
        "<!-- Left Column should containt Content BLock -->" +
        "</td>" +
        +"<td align='left' valign='middle' width='50%' class='column last'><!-- Align, Valign, width -> Dynamic -->" +
        " <!-- Right Column should containt Content BLock -->" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "<!--[if (gte mso 9)|(IE)]>" +
        "</td>" +
        "</tr>" +
        "</table><![endif]-->"
    );
  }

  /**
   * Fired when the user starts dragging an
   * element or text selection. Bind the drag event to predefined blocks.
   */
  public _dragStart() {
    const self = this;
    $('body').on('dragstart', '.block', function(event) {
      const type: string = $(event.target).data().type;
      event.originalEvent.dataTransfer.setData('text/html', self.blocks.get(type));
      self.isBlock = true;
    });
  }

  /**
   * Fired when a dragged element or
   * text selection enters a valid drop target.
   */
  private _dragEnter() {
    const self = this;
    $('body').on('dragenter', '.eb-selected-item', function(event) {
      if (!self.isBlock) { return; }
      console.log('dragEnter', event);
    });
  }

  /**
   * Fired when an element or
   * text selection is being
   * dragged over a valid drop
   * target (every few hundred milliseconds).
   */
  private _dragOver() {
    const self = this;
    $('body').on('dragover', '.eb-selected-item, .eb-module', function(event) {
      if (self.isBlock) {
        event.preventDefault();
        event.stopPropagation();

        if (!$(this).hasClass('eb-module')) { return; }

        const middleOfElement: number = $(this).offset().top + $(this).height() / 2;
        const eventYPos: number = event.originalEvent.pageY;

        if (eventYPos <= middleOfElement) {

          if ($(this).hasClass('eb-insert-before')) { return; }

          if ($(this).hasClass('eb-insert-after')) {
            $(this).removeClass('eb-insert-after');
          }

          $(this).addClass('eb-insert-before');
          self.position = true;

        } else {

          if ($(this).hasClass('eb-insert-after')) { return; }

          if ($(this).hasClass('eb-insert-before')) {
            $(this).removeClass('eb-insert-before');
          }

          $(this).addClass('eb-insert-after');
          self.position = false;
        }
      }
    });
  }

  /**
   * Fired when a dragged element or
   * text selection leaves a valid drop target.
   */
  private _dragLeave() {
    const self = this;
    $('body').on('dragleave', '.eb-selected-item, .eb-module', function(event) {
      if (!self.isBlock) { return; }

      if ($(this).hasClass('eb-insert-before')) {
        $(this).removeClass('eb-insert-before');
      }

      if ($(this).hasClass('eb-insert-after')) {
        $(this).removeClass('eb-insert-after');
      }
    });
  }

  /**
   * Fired when a drag operation is
   * being ended (for example,
   * by releasing a mouse button
   * or hitting the escape key).
   */
  private _dragEnd() {
    const self = this;
    $('body').on('dragend', '.block', function(event) {
      self._isBlock = false;
    });
  }

  /**
   * Insert the new element before or
   * after the selected element.
   */
  private _drop() {
    const self = this;

    $('body').on('drop', '.eb-selected-item, .eb-module', function(event) {
      if (!self.isBlock) { return; }
      console.log('drop', event);
      event.preventDefault();
      event.stopPropagation();

      const data = event.originalEvent.dataTransfer.getData('text/html');

      if ($(this).hasClass('eb-module')) {
        if (self.position) {
          $(data).insertBefore('.eb-module.eb-insert-before');
          $('.eb-module').removeClass('eb-insert-before');
        } else {
          $(data).insertAfter('.eb-module.eb-insert-after');
          $('.eb-module').removeClass('eb-insert-after');
        }
      } else {
        $(this).append(data);
      }
    });
  }

  /**
   * Bind all events
   */
  private _bindEvents() {
    this._loadBlocks();
    this._dragStart();
    this._dragOver();
    this._dragEnter();
    this._dragLeave();
    this._dragEnd();
    this._drop();
  }

  /**
   * Construct
   */
  constructor() {
    this._bindEvents();
  }
}
