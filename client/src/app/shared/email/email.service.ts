import { Injectable } from "@angular/core";

@Injectable()
export class EmailService {
	private _selected_element;

	constructor() {}

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
		console.log(this.selected_element);
	}
	
}
