import { Component, OnInit } from "@angular/core";
import { OnChanges, DoCheck } from "@angular/core/src/metadata/lifecycle_hooks";

import { EmailService } from "../../shared/email/email.service";

declare var $: any;

@Component({
	selector: "app-content-tools",
	templateUrl: "./content-tools.component.html",
	styleUrls: ["./content-tools.component.css"]
})
export class ContentToolsComponent implements OnInit, DoCheck {
	private _selected_element;
	private _element_props: ElementProps;

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

	public get element_props() {
		return this._element_props;
	}

	public set element_props(value) {
		this._element_props = value;
	}

	constructor(private emailService: EmailService) {}

	ngOnInit() {
		this._bindEvents();
		this.selected_element = this.emailService.selected_element;
	}

	ngDoCheck() {
		this.selected_element = this.emailService.selected_element;

		if (this.selected_element) {
			
			let { alt, tagName, src } = this.selected_element[0];

			this.element_props = {
				alt,
				tagName,
				src
			}
		}
	}
}


interface ElementProps {
	alt: string,
	tagName: string,
	src: string
}