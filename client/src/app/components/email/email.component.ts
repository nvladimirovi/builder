import { Component, OnInit } from '@angular/core';
import { EmailService } from "../../shared/email/email.service"
declare var $: any;

@Component({
	selector: "app-email",
	templateUrl: "./email.component.html",
	styleUrls: ["./email.component.css"]
})
export class EmailComponent implements OnInit {
	private event_targets = ".result table, .result tr, .result td, .result a, .result p, .result img";
	private _selected_element;

	/**
	 * Get the x, y position of the 
	 * element.
	 * @param event 
	 */
	private _getElementPosition(event) {
		let leftPos = $(event.currentTarget).offset().left;
		let rightPos = leftPos + $(event.currentTarget).width();

		let topPos = $(event.currentTarget).offset().top;
		let bottomPos = topPos + $(event.currentTarget).height();
	}

	/**
	 * Draw the grid lines.
	 */
	private _drawGrid() {
		const self = this;

		$(self.event_targets).hover(function(event) {
		event.preventDefault();
		event.stopPropagation();

		const element = $(this);

		$(self.event_targets).css({
			outline: "none"
		});

		element.css({
			outline: "1px solid #3b97db"
		});
		});
	}

	/**
	 * Selects elements.
	 */
	private _selectElement() {
		const self = this;

		$(self.event_targets).on("click", function(event) {
		event.preventDefault();
		event.stopPropagation();

		$(".ng_selected_item").removeClass("ng_selected_item");

		const element = $(this);

		element.addClass("ng_selected_item");

		self.selected_element = element;
		});
	}

	/**
	 * Bind events on init
	 */
	private _bindEvents() {
		this._drawGrid();
		this._selectElement();
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
		this.emailService.selected_element = this.selected_element;
	}

	constructor(private emailService: EmailService) {}

	ngOnInit() {
		this._bindEvents();
	}
}
