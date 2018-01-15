import { Component, OnInit } from "@angular/core";
import { EmailService } from "../../shared/email/email.service"

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
export class ContentToolsComponent implements OnInit {
	private _selected_element = this.emailService.selected_element;

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
	
	ngOnInit() {
		this._bindEvents();
		this.selected_element = this.emailService.selected_element;
	}
}
