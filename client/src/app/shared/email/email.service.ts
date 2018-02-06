import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class EmailService {
	private _event_targets: string = '.result .eb-editable';
	private _baseWidth: number = 640;
	private _selected_element;
	
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
		if (value) {
			this._selected_element = value;
			console.log('EmailService', value);
		}
	}

	/**
	 * Get the base width of the email
	 */
	public get baseWidth(): number {
		return this._baseWidth;
	}
	
	/**
	 * The main targets
	 */
	public get event_targets(): string {
		return this._event_targets;
	}

	/**
	 * Draw the grid lines.
	 */
	private _drawGrid(): void {
		const self = this;

		$('body').on('mouseover', self._event_targets, function(event) {
			event.preventDefault();
			event.stopPropagation();

			const element = $(this);

			$('.eb-hovered-item').removeClass('eb-hovered-item');

			element.addClass('eb-hovered-item');
		});
	}

	/**
	 * Selects elements.
	 */
	private _selectElement(): void {
		const self = this;

		$('body').on('click', self._event_targets, function(event) {
			event.preventDefault();
			event.stopPropagation();

			$('.eb-selected-item').removeClass('eb-selected-item');

			const element = $(this);

			element.addClass('eb-selected-item');

			self.selected_element = element;
		});
	}

	/**
	 * Delete selected element
	 */
	public deleteElement(): void {
		this.selected_element.remove();
	}

	/**
	 * Transform color to hex
	 * @param c for color in rgb
	 */
	private _componentToHex(c: number): string {
		const hex = c.toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	}

	/**
	 * Transform rba to hex
	 * @param r red
	 * @param g green
	 * @param b blue
	 */
	private _rgbToHex(r: number, g: number, b: number): string {
		if (
		(r !== null && !isNaN(r)) &&
		(g !== null && !isNaN(g)) &&
		(b !== null && !isNaN(b))
		) {
		return (
			'#' +
			this._componentToHex(r) +
			this._componentToHex(g) +
			this._componentToHex(b)
		);
		}
	}

	/**
	 * Inovke the private method with the same name.
	 * @param r red
	 * @param g green
	 * @param b bluue
	 */
	public rgbToHex(rgb: string) {
		if (!rgb) {
		return;
		}

		const rgbArray: string[] = rgb
		.substring(4, rgb.length - 1)
		.replace(/ /g, '')
		.split(',');

		/**
		 * Second parameter of pareseInt is
		 * base in mathematical numeral systems
		 * Example:
		 * - 10 for deciamal numeral system
		 * - 2 for binary numeral system and so on.
		 */
		const r = parseInt(rgbArray[0], 10);
		const g = parseInt(rgbArray[1], 10);
		const b = parseInt(rgbArray[2], 10);

		return this._rgbToHex(r, g, b);
	}

	private _bindEvents(): void {
		this._drawGrid();
		this._selectElement();
	}

	constructor() {
		this._bindEvents();
	}
}
