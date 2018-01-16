import { Component, OnInit } from "@angular/core";
import { EmailService } from "../../shared/email/email.service"
import { OnChanges, DoCheck } from "@angular/core/src/metadata/lifecycle_hooks";

/**
 * This component uses range slider which
 * you can find here: https://www.npmjs.com/package/ion-rangeslider.
 * Demos : http://ionden.com/a/plugins/ion.rangeSlider/demo.html
 */

declare var $: any;

@Component({
  selector: "app-content-tools",
  templateUrl: "./content-tools.component.html",
  styleUrls: ["./content-tools.component.css"]
})
export class ContentToolsComponent implements OnInit, DoCheck, OnChanges {
  private _selected_element = "Content Tools Component";

  /**
   * Init the range lib
   */
  private _initRange() {
    $("#range").ionRangeSlider({ max: 640 });
  }

  /**
   * Init the collapse dropdowns
   */
  private _initCollapse() {
    $(".tools-collapse .toggle").on("click", function() {
      $(this).toggleClass("active");
      $(this)
        .parent()
        .children(".inner-content")
        .toggleClass("active");
    });
  }

  /**
   * Bind events on init
   */
  private _bindEvents() {
    this._initRange();
    this._initCollapse();

    // $("html, body").on("click", () => {
    // 	this.selected_element = this.emailService.getSelectedElement()[0].tagName;
    // });
  }

  /**
   * Get selected element
   */
  public get selected_element() {
    return this._selected_element;
  }

  /**
   * Set selected element
   */
  public set selected_element(value) {
    this._selected_element = value;
  }

  constructor(private emailService: EmailService) {}

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    this._bindEvents();
    this.selected_element = this.emailService.getSelectedElement();
  }

  ngDoCheck() {
    this.selected_element = this.emailService.getSelectedElement();
  }
}
