import { Injectable } from '@angular/core';
const interact = require('interactjs');
declare var $: any;

@Injectable()
export class EmailService {
    private _event_targets: string = '.result .eb-editable';
    private _baseWidth: number = 640;
    private _selected_element;
    private _isModule: boolean;
    private _position: number;

    /**
     * Get position
     */
    public get position(): number {
        return this._position;
    }

    /**
     * Set position
     */

    public set position(value: number) {
        this._position = value;
    }

    /**
     * Get isModule
     */
    get isModule(): boolean {
        return this._isModule;
    }

    /**
     * Set isModule
     */
    set isModule(value: boolean) {
        this._isModule = value;
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

    public dragAndDrop(): void {
        // enable draggables to be dropped into this
        interact('.result body, .result .eb-module').dropzone({
            // only accept elements matching this CSS selector
            accept: '#yes-drop',
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
            // listen for drop related events:
            ondropactivate: function(event) {
                // add active dropzone feedback
                const target = event.target;

                $(target).addClass('drop-active');
            },
            ondragenter: function(event) {
                const draggableElement = event.relatedTarget;
                const dropzoneElement = event.target;

                // feedback the possibility of a drop
                $(dropzoneElement).addClass('drop-target');
                $(draggableElement).addClass('can-drop');
            },
            ondragleave: function(event) {
                // remove the drop feedback style
                const target = event.target;

                $(target).removeClass('drop-target');
                $(target).removeClass('can-drop');
            },
            ondrop: (event) => {
                const dropzoneElement = event.target;
                const element = event.draggable.options.accept;

                const dropzoneOffset = $(dropzoneElement).offset().top + ($(dropzoneElement).height() / 2);

                console.log($(dropzoneElement).offset().top, dropzoneOffset);

                if ($(dropzoneElement).hasClass('eb-module')) {
                        // Insert before the dropzone.
                        if (this.position < dropzoneOffset) {
                            $(element).insertBefore(dropzoneElement);
                        } else {
                            $(element).insertAfter(dropzoneElement);
                        }
                } else {
                    // Insert to the dropzone.
                    $(dropzoneElement).append(element);
                }

                $(window).off('mousemove');
            },
            ondropdeactivate: function(event) {
                // remove active dropzone feedback
                const target = event.target;

                $(target).removeClass('drop-active');
                $(target).removeClass('drop-target');
            }
        });
    }

    private _bindEvents(): void {
        this._drawGrid();
        this._selectElement();
        this.dragAndDrop();
    }

    constructor() {
        this._bindEvents();
    }
}
