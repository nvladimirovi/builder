import { Injectable } from '@angular/core';
import { MapType } from '@angular/compiler/src/output/output_ast';

declare var $: any;

@Injectable()
export class LayoutService {
  private _blocks_map = new Map<string, string>();

  /**
   * Get blocks
   */
  public get blocks() {
    return this._blocks_map;
  }

  /**
   * Load blocks
   */
  private _loadBlocks() {
    this.blocks.set(
      "header",
      "<table width='600' class='eb-editable eb-module eb-module-empty' cellpadding='0' cellspaceing='0'><tr><td valign='top' align='left'></td></tr></table>"
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
   * element or text selection.
   */
  private _dragStart() {
    $("body").on("dragstart", ".eb-selected-item", function(event) {
      console.log("dragStart", event);
    });
  }

  /**
   * Fired when a dragged element or
   * text selection enters a valid drop target.
   */
  private _dragEnter() {
    $("body").on("dragenter", ".eb-selected-item", function(event) {
      console.log("dragEnter", event);
    });
  }

  /**
   * Fired when an element or
   * text selection is being
   * dragged over a valid drop
   * target (every few hundred milliseconds).
   */
  private _dragOver() {
    $("body").on("dragover", ".eb-selected-item", function(event) {
      console.log("dragover", event.detail);
      event.preventDefault();
    });
  }

  /**
   * Fired when a dragged element or
   * text selection leaves a valid drop target.
   */
  private _dragLeave() {
    $("body").on("dragleave", ".eb-selected-item", function(event) {
      console.log("dragLeave", event);
    });
  }

  /**
   * Fired when a drag operation is
   * being ended (for example,
   * by releasing a mouse button
   * or hitting the escape key).
   */
  private _dragEnd() {
    $("body").on("dragend", ".eb-selected-item", function(event) {
      console.log("dragEnd", event);
    });
  }

  /**
   * Insert the new element before or
   * after the selected element.
   */
  private _drop() {
    $("body").on("drop", ".eb-selected-item", function(event) {
      console.log("drop", event);
      event.preventDefault();
      event.stopPropagation();

      const data = event.originalEvent.dataTransfer.getData("text/html");

      $(this).append(data);
    });
  }

  /**
   * Bind the drag event to predefined blocks.
   * @param event
   */
  public _drag(event) {
    const type: string = $(event.target).data().type;
    event.dataTransfer.setData("text/html", this.blocks.get(type));
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
