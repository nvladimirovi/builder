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

    private _bindEvents(): void {
        this._drawGrid();
        this._selectElement();
    }

    constructor() {
        this._bindEvents();
    }
}
