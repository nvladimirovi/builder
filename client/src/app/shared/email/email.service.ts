import { Injectable } from "@angular/core";

@Injectable()
export class EmailService {
	selected_element;

	/**
	 * Get the selected element
	 */
	getSelectedElement() {
		return this.selected_element;
	}
	
	/**
	 * Set selected element
	 */
	setSelectedElement(value) {
		this.selected_element = value;
	}
}
