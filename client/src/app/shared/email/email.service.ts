import { Injectable } from "@angular/core";
declare var $: any;

@Injectable()
export class EmailService {
	private _event_targets = ".result table, .result tr, .result td, .result a, .result p, .result img";
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

		$(self._event_targets).hover(function (event) {
			event.preventDefault();
			event.stopPropagation();

			const element = $(this);

			$(".ng_hovered_item").removeClass("ng_hovered_item");

			element.addClass("ng_hovered_item");
		});
	}

	/**
	 * Selects elements.
	 */
	private _selectElement() {
		const self = this;

		$(self._event_targets).on("click", function (event) {
			event.preventDefault();
			event.stopPropagation();

			$(".ng_selected_item").removeClass("ng_selected_item");

			const element = $(this);

			element.addClass("ng_selected_item");

			self.selected_element = element;
		});
	}

	/**
	 * Return the encapsulated function.
	 */
	public drawGrid() {
		return this._drawGrid();
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
		this._selected_element = value;
	}
}
