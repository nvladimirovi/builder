export interface Draggable {
    /**
     * Fired when the user starts dragging an
     * element or text selection. Bind the drag event to predefined blocks.
     */
    dragStart(): void;

    /**
     * Fired when a dragged element or
     * text selection enters a valid drop target.
     */
    dragEnter(): void;

    /**
     * Fired when an element or
     * text selection is being
     * dragged over a valid drop
     * target (every few hundred milliseconds).
     */
    dragOver(): void;

    /**
     * Fired when a dragged element or
     * text selection leaves a valid drop target.
     */
    dragLeave(): void;

    /**
     * Fired when a drag operation is
     * being ended (for example,
     * by releasing a mouse button
     * or hitting the escape key).
     */
    dragEnd(): void;

    /**
     * Insert the new element before or
     * after the selected element.
     */
    drop(): void;
}
