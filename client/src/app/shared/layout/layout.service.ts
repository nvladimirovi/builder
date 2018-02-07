import { Injectable } from '@angular/core';
import { Draggable } from '../../utilities/interfaces/draggable';
declare var $: any;

@Injectable()
export class LayoutService implements Draggable {
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
  public _loadBlocks() {
    this.blocks.set(
      "header",
      "<table width='600' class='eb-module eb-module-empty' cellpadding='0' cellspaceing='0'><tr><td valign='top' align='left'></td></tr></table>"
    );
    this.blocks.set(
      'three-columns',
      `<table cellpadding="0" cellspacing="0" border="0" width="600" style="border-radius: 5px;" bgcolor="#ffffff" class="base eb-module">
      <tbody><tr>
      <td align="center" valign="top" style="padding: 45px 34px;" class="mainPanel">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="panel threeImages">
      <tbody>
      <tr>
      <td align="center" style="text-align: center; font-size: 0;">
      <!--[if (gte mso 9)|(IE)]>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
      <td width="33.3%" valign="top">
      <![endif]-->
      <div class="column" style="width: 33.3%; display: inline-block; vertical-align: top;" align="left">
      <table cellpadding="0" cellspacing="0" border="0" width="167">
      <tbody><tr>
      <td align="left" valign="middle" class="imageContainer orange" style="border-bottom: 5px solid #3cceab;"> 
      <a href="https://clearscore.com/mortgages/best-remortgage-deals">
      <img src="https://cdn.getblueshift.com/pictures/8717/content/trigger_104_tulips.png"
      width="167" style="max-width: 167px; display: block; border: 0;" alt="MORTGAGES">
      </a>
      </td>
      <!--[if !mso]><!---->
      <td align="right" valign="middle" class="hide-desktop" style="display: none;">
      <table cellpadding="0" cellspacing="0" border="0">
      <tbody><tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 20px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://clearscore.com/mortgages/best-remortgage-deals" style="color: #586d7c;">
      5 remortgaging myths stopping you from getting the best deal</a></font>
      </td>
      </tr>
      </tbody></table>
      </td>
      <!--<![endif]-->
      </tr>
      <tr class="desktop">
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr class="desktop">
      <td align="left" valign="top"
      style="padding-top: 10px; padding-right: 10px; mso-line-height-rule: exactly; line-height: 20px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://clearscore.com/mortgages/best-remortgage-deals" style="color: #586d7c;">
      5 remortgaging myths stopping you from getting the best deal</a></font>
      </td>
      </tr>
      </tbody></table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <td width="33.3%" valign="top">
      <![endif]-->
      <div class="column" style="width: 33.3%; display: inline-block; vertical-align: top;" align="center">
      <table cellpadding="0" cellspacing="0" border="0" width="167">
      <tbody><tr>
      <td align="center" valign="middle" class="imageContainer orange" style="border-bottom: 5px solid #3cceab;">
      <a href="https://www.clearscore.com/mortgages/when-your-fixed-rate-mortgage-ends-standard-variable-rate">
      <img src="https://cdn.getblueshift.com/pictures/8716/content/trigger_104_black-door.png"
      width="167" style="max-width: 167px; display: block; border: 0;" alt="MORTGAGES">
      </a>
      </td>
      <!--[if !mso]><!---->
      <td align="right" valign="middle" class="hide-desktop" style="display: none;">
      <table cellpadding="0" cellspacing="0" border="0">
      <tbody><tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 20px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://www.clearscore.com/mortgages/when-your-fixed-rate-mortgage-ends-standard-variable-rate" 
      style="color: #586d7c;">What happens when the fixed-rate period on your mortgage ends?</a></font>
      </td>
      </tr>
      </tbody></table>
      </td>
      <!--<![endif]-->
      </tr>
      <tr class="desktop">
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr class="desktop">
      <td align="left" valign="top"
      style="padding-top: 10px; padding-right: 10px; mso-line-height-rule: exactly; line-height: 20px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://www.clearscore.com/mortgages/when-your-fixed-rate-mortgage-ends-standard-variable-rate" style="color: #586d7c;">
      What happens when the fixed-rate period on your mortgage ends?</a></font>
      </td>
      </tr>
      </tbody></table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <td width="33.3%" valign="top">
      <![endif]-->
      <div class="column" style="width: 33.3%; display: inline-block; vertical-align: top;" align="right">
      <table cellpadding="0" cellspacing="0" border="0" width="167">
      <tbody><tr>
      <td align="center" valign="middle" class="imageContainer orange" style="border-bottom: 5px solid #3cceab;">
      <a href="https://www.clearscore.com/mortgages/should-you-remortgage">
      <img src="https://cdn.getblueshift.com/pictures/8714/content/trigger_104_pink-door.jpg" 
      width="167" style="max-width: 167px; display: block; border: 0;" alt="MORTGAGES"></a>
      </td>
      <!--[if !mso]><!---->
      <td align="right" valign="middle" class="hide-desktop" style="display: none;">
      <table cellpadding="0" cellspacing="0" border="0">
      <tbody><tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr>
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 20px;">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://www.clearscore.com/mortgages/should-you-remortgage" style="color: #586d7c;">
      Find out if remortgaging makes financial sense for you</a></font>
      </td>
      </tr>
      </tbody></table>
      </td>
      <!--<![endif]-->
      </tr>
      <tr class="desktop">
      <td align="left" valign="top" style="padding-top: 10px; mso-line-height-rule: exactly; line-height: 19px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #3cceab; font-size: 15px;">MORTGAGES</font>
      </td>
      </tr>
      <tr class="desktop">
      <td align="left" valign="top"
      style="padding-top: 10px; padding-right: 10px; mso-line-height-rule: exactly; line-height: 20px;" class="center" colspan="2">
      <font style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #586d7c; font-size: 15px;">
      <a href="https://www.clearscore.com/mortgages/should-you-remortgage" style="color: #586d7c;">
      Find out if remortgaging makes financial sense for you</a></font>
      </td>
      </tr>
      </tbody></table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
      <![endif]-->
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>`
    );
  }

  /**
   * Fired when the user starts dragging an
   * element or text selection. Bind the drag event to predefined blocks.
   */
  public dragStart(): void {
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
  public dragEnter(): void {
    const self = this;
    $('body').on('dragenter', '.eb-selected-item', function(event) {
      if (!self.isBlock) { return; }
      // console.log('dragEnter', event);
    });
  }

  /**
   * Fired when an element or
   * text selection is being
   * dragged over a valid drop
   * target (every few hundred milliseconds).
   */
  public dragOver(): void {
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
  public dragLeave(): void {
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
  public dragEnd(): void {
    const self = this;
    $('body').on('dragend', '.block', function(event) {
      self._isBlock = false;
    });
  }

  /**
   * Insert the new element before or
   * after the selected element.
   */
  public drop(): void {
    const self = this;

    $('body').on('drop', '.eb-selected-item, .eb-module', function(event) {
      if (!self.isBlock) { return; }
      // console.log('drop', event);
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
    this.dragStart();
    this.dragOver();
    this.dragEnter();
    this.dragLeave();
    this.dragEnd();
    this.drop();
  }

  /**
   * Construct
   */
  constructor() {
    this._bindEvents();
  }
}
