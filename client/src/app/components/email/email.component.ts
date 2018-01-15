import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: "app-email",
	templateUrl: "./email.component.html",
	styleUrls: ["./email.component.css"]
})
export class EmailComponent implements OnInit {
	private event_targets = ".result table, .result tr, .result td, .result a, .result p, .result img";
	private _selected_element;
	
	private _getElementPosition(event) {
		let leftPos = $(event.currentTarget).offset().left;
		let rightPos = leftPos + $(event.currentTarget).width();

		let topPos = $(event.currentTarget).offset().top;
		let bottomPos = topPos + $(event.currentTarget).height();
	}

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

	private _selectElement() {
		const self = this;
		
		$(self.event_targets).on("click", function(event) {
			event.preventDefault();
			event.stopPropagation();

			const element = $(this);

			element.css({
				outline: "1px solid #d620d6"
			});

			self.selected_element = element;
		});
	}
	
	private _bindEvents() {
		this._drawGrid();
		this._selectElement();
	}

	public get selected_element() {
		console.log(this._selected_element);
		return this._selected_element;
	}
	
	public set selected_element(value) {
		this._selected_element = value;
		this.selected_element;
	}
	
	constructor() {}

  	ngOnInit() {
		this._bindEvents();
	}
}
