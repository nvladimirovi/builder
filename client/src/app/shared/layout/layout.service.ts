import { Injectable } from '@angular/core';
import { EmailService } from '../email/email.service';
declare var $: any;
declare var interact: any;

@Injectable()
export class LayoutService {
    private _blocks_map = new Map<string, string>();
    private _isModule: boolean;
    private _position: boolean;
    private _selectedClass: string = '.eb-selected-item';
    private _blockClass: string = '.block';

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
     * Get isModule
     */
    get isModule(): boolean {
        return this._isModule;
    }

    /**
     * Set isModule
     */
    set isModule(value: boolean) {
        this._isModule = value;
    }

    /**
     * Load blocks
     */
    public _loadBlocks() {
        this.blocks.set(
            'header',
            `<table width='600' class='eb-module eb-module-empty eb-editable'
            cellpadding='0' cellspaceing='0'><tr><td valign='top' align='left'></td></tr></table>`
        );
        this.blocks.set(
            'three-columns',
            `<table cellpadding="0" cellspacing="0" border="0" width="600"
            style="border-radius: 5px;" bgcolor="#ffffff" class="base eb-module eb-editable">
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
            <td align="left" valign="top" style="padding-top: 10px;
            mso-line-height-rule: exactly; line-height: 19px;" class="center" colspan="2">
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

    public dragAndDrop(): void {
        interact('.draggable').draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: $('.email.wrapper')[0],
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
            },
            // enable autoScroll
            autoScroll: true,
            onstart: function(event) {
                const target = event.target;
                const clone = $(target).clone(true);

                $(target).addClass('start-dragging');
                $(target).parent().append(clone);
            },
            // call this function on every dragmove event
            onmove: (event) => {
                const target = event.target;

                // keep the dragged position in the data-x/data-y attributes
                const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                // translate the element
                target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';
                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);

                this.emailService.position = $(target).offset().top;
                // console.log($('.result')[0].scrollTop);
            },
            // call this function on every dragend event
            onend: (event) => {
                // console.log('onEnd', event);
                const target = event.target;
                // console.log($(target).data().block);
                event.interactable.options.accept = this.blocks.get($(target).data().block);
                $(target).remove();
            }
        });
    }

    /**
     * Bind all events
     */
    private _bindEvents() {
        this._loadBlocks();
        this.dragAndDrop();
    }

    /**
     * Construct
     */
    constructor(private emailService: EmailService) {
        this._bindEvents();
    }
}
