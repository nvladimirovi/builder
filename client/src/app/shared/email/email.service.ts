import { Injectable } from '@angular/core';
declare var $: any;
declare var interact: any;

@Injectable()
export class EmailService {
    private _event_targets: string = '.result .eb-editable';
    private _baseWidth: number = 640;
    private _selected_element;
    private _isModule: boolean;
    private _position: number;
    private _isDropped: boolean;

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
     * Get is dropped.
     */
    public get isDropped(): boolean {
        return this._isDropped;
    }

    /**
     * Set is dropped
     */
    public set isDropped(value: boolean) {
        this._isDropped = value;
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
     * Selects elements and add indication.
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
     * Triggered when start to drag element
     * @param event 
     */
    private _onMove(event): void {
        const target = event.target;

        // keep the dragged position in the data-x/data-y attributes
        const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
        // translate the element
        target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";
        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
    }

    /**
     * Add new element before or after the dropzone dependant of the position.
     * @param element html string which is loaded by _loadBlocks in Layout Service
     * @param dropzoneElement where element will be placed
     * @param dropzoneOffset the position of the dropzone
     */
    private _appendNewElement(element: any, dropzoneElement: any, dropzoneOffset: number): void {
        if (this.position < dropzoneOffset) {
            // Insert before the dropzone.
            $(element).insertBefore(dropzoneElement);
        } else {
            // Insert after the dropzone.
            $(element).insertAfter(dropzoneElement);
        }
    }

    /**
     * Triggered when you want to move one elment to another place.
     * @param draggableElement element which you drag.
     * @param dropzoneElement where element will be placed
     * @param dropzoneOffset the position of the dropzone
     */
    private _moveElement(draggableElement: any, dropzoneElement: any, dropzoneOffset: number): void {
        const draggableElementClone = $(draggableElement)
            .clone(false)
            .css({ transform: "none" })
            .attr({ "data-x": 0, "data-y": 0 });

        if ($(draggableElement).offset().top < dropzoneOffset) {
            // Insert before the dropzone.
            $(draggableElementClone).insertBefore(dropzoneElement);
        } else {
            // Insert after the dropzone.
            $(draggableElementClone).insertAfter(dropzoneElement);
        }

        $(draggableElement).remove();
    }

    /**
     * Triggered on drop.
     * @param event 
     */
    private _onDrop(event): void {
        const dropzoneElement = event.target;
        const element = event.draggable.options.accept;
        const draggableElement = event.relatedTarget;

        this.isDropped = true;

        if (!$(dropzoneElement).hasClass("eb-module")) {
          // Insert to the dropzone.
          if ($(draggableElement).hasClass("eb-selected-item")) {
                $(draggableElement)
                    .css({ transform: "none" })
                    .attr({ "data-x": 0, "data-y": 0 });
          }

          $(dropzoneElement).append(element);
          return;
        }

        const dropzoneOffset = $(dropzoneElement).offset().top + $(dropzoneElement).height() / 2;
        
        if (!$(draggableElement).hasClass("eb-selected-item")) {
            this._appendNewElement(element, dropzoneElement, dropzoneOffset);
        } else {
            this._moveElement(draggableElement, dropzoneElement, dropzoneOffset);
        }
        return;
    }

    private _ondropDeactivate(event) {
        const target = event.target;

        if(this.isDropped) {
            // remove active dropzone feedback
            
            $(target).removeClass("drop-active");
            $(target).removeClass("drop-target");
            this.isDropped = false;

        } else {
            $(event.relatedTarget)
                .css({ transform: "none" })
                .attr({ "data-x": 0, "data-y": 0 });
        }
    }

    /** 
     * Set draggable objects.
     */
    private _draggable(): void {
        interact('.eb-module.eb-selected-item').draggable({
            // enable inertial throwing
            inertia: false,
            // keep the element within the area of it's parent
            restrict: {
                restriction: $('.result')[0],
                endOnly: false,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,
            onstart: function(event) {
                const target = event.target;
                $(target).addClass('start-dragging');
            },
            // call this function on every dragmove event
            onmove: this._onMove,
            // call this function on every dragend event
            onend: (event) => {
                const target = event.target;
            }
        });
    }

    /** 
     * Set dropzone objects.
     */
    private _dropZone(): void {
        // enable draggables to be dropped into this
        interact('.result body, .result .eb-module').dropzone({
            // only accept elements matching this CSS selector
            accept: '#yes-drop, .eb-module.eb-selected-item',
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
            ondrop: this._onDrop.bind(this),
            ondropdeactivate: this._ondropDeactivate.bind(this)
        });
    }

    /**
     * Bind all events here.
     */
    private _bindEvents(): void {
        this._drawGrid();
        this._selectElement();
        this._dropZone();
        this._draggable();
    }

    constructor() {
        this._bindEvents();
    }
}
