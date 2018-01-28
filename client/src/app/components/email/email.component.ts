import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../shared/email/email.service';
declare var $: any;

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
    private _selected_element;

    private _drawGrid() {
        this.emailService.drawGrid();
    }

    private _selectElement() {
        this.emailService.selectElement();
    }

    /**
     * Bind events on init
     */
    private _bindEvents() {
        this._drawGrid();
        this._selectElement();
        this.emailService.dragOver();
        this.emailService.drop();
        this.emailService.dragEnd();
    }

    /**
     * Get selected element
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

    constructor(private emailService: EmailService) {}

    ngOnInit() {
        this._bindEvents();
    }
}
