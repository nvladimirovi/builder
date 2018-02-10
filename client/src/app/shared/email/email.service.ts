import { Injectable } from '@angular/core';
import { Draggable } from '../../utilities/interfaces/draggable';
declare var $: any;

@Injectable()
export class EmailService implements Draggable {
    private _event_targets: string = '.result .eb-editable, .result .eb-module';
    private _baseWidth: number = 640;
    private _selected_element;
    private _isModule: boolean;
    private _position: boolean;

    /**
     * Get position
     */
    get position(): boolean {
        return this._position;
    }

    /**
     * Set position
     */

    set position(value: boolean) {
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
            self._disableDraggable('.result .eb-module.eb-selected-item');

            const element = $(this);

            element.addClass('eb-selected-item');

            self.selected_element = element;

            self._enableDraggable('.result .eb-module.eb-selected-item');
        });
    }

    /**
     * Make target draggable
     * @param target string of classes
     */
    private _enableDraggable(target: string) {
        $(target).attr({
            draggable: true
        });
    }

    /**
     * Disable draggable
     */
    private _disableDraggable(target: string) {
        $(target).attr({
            draggable: false
        });
    }

    /**
     * Fired when the user starts dragging an
     * element or text selection. Bind the drag event to predefined blocks.
     */
    public dragStart(): void {
        $('body').on('dragstart', '.result .eb-module.eb-selected-item', (event) => {
            event.originalEvent.dataTransfer.setData('text/plain', '.eb-module.eb-selected-item');
            this.isModule = true;
        });
    }

    /**
     * Fired when a dragged element or
     * text selection enters a valid drop target.
     */
    public dragEnter(): void {}

    /**
     * Fired when an element or
     * text selection is being
     * dragged over a valid drop
     * target (every few hundred milliseconds).
     */
    public dragOver(): void {
        const self = this;
        $('body').on('dragover', '.result .eb-module', function(event) {
            if (self.isModule) {
                event.preventDefault();
                event.stopPropagation();

                if (!$(this).hasClass('eb-module') || $(this).hasClass('eb-selected-item')) { return; }

                const middleOfElement: number = $(this).offset().top + $(this).height() / 2;
                const eventYPos: number = event.originalEvent.pageY;

                if (eventYPos <= middleOfElement) {

                    if ($(this).hasClass('eb-insert-before')) { return; }

                    if ($(this).hasClass('eb-insert-after')) {
                        $(this).removeClass('eb-insert-after');
                    }

                    $(this).addClass('eb-insert-before');
                    self.position = true;

                } else {

                    if ($(this).hasClass('eb-insert-after')) { return; }

                    if ($(this).hasClass('eb-insert-before')) {
                        $(this).removeClass('eb-insert-before');
                    }

                    $(this).addClass('eb-insert-after');
                    self.position = false;
                }
            }
        });
    }

    /**
     * Fired when a dragged element or
     * text selection leaves a valid drop target.
     */
    public dragLeave(): void {
        const self = this;
        $('body').on('dragleave', '.result .eb-module', function(event) {
            if (!self.isModule) { return; }

            if ($(this).hasClass('eb-insert-before')) {
                $(this).removeClass('eb-insert-before');
            }

            if ($(this).hasClass('eb-insert-after')) {
                $(this).removeClass('eb-insert-after');
            }
        });
    }

    /**
     * Fired when a drag operation is
     * being ended (for example,
     * by releasing a mouse button
     * or hitting the escape key).
     */
    public dragEnd(): void {
        $('body').on('dragend', '.result .eb-module.eb-selected-item', (event) => {
            this._isModule = false;
        });
    }

    /**
     * Insert the new element before or
     * after the selected element.
     */
    public drop(): void {
        const self = this;

        $('body').on('drop', '.result .eb-module', function(event) {
            console.log('drop', event);
            event.preventDefault();
            event.stopPropagation();

            const data = event.originalEvent.dataTransfer.getData('text/plain');

            if ($(this).hasClass('eb-module')) {
                if (self.position) {
                    $(data).insertBefore('.eb-module.eb-insert-before');
                    $('.eb-module').removeClass('eb-insert-before');
                } else {
                    $(data).insertAfter('.eb-module.eb-insert-after');
                    $('.eb-module').removeClass('eb-insert-after');
                }
            }
        });
    }

    public dragAndDrop(): void {
        this.dragStart();
        this.dragOver();
        this.dragLeave();
        this.drop();
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
