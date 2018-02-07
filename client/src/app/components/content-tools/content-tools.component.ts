import { Component, OnInit } from '@angular/core';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

import { EmailService } from '../../shared/email/email.service';
import { ContentService } from 'app/shared/content/content.service';

declare var $: any;

@Component({
    selector: 'app-content-tools',
    templateUrl: './content-tools.component.html',
    styleUrls: ['./content-tools.component.css']
})
export class ContentToolsComponent implements OnInit, DoCheck {
    private _element;

    /**
     * Init the collapse dropdowns
     */
    private _initCollapse() {
        $('.tools-collapse .toggle').on('click', function() {
            if ($(this).parent().children('.inner-content').length < 1) { return; }

            $(this).toggleClass('active');
            $(this)
                .parent()
                .children('.inner-content')
                .toggleClass('active');
        });
    }

    /**
     * Bind events on init
     */
    private _bindEvents() {
        this._initCollapse();
    }

    /**
     * Get selected element
     */
    public get element() {
        return this._element;
    }

    /**
     * Set selected element
     */
    public set element(value) {
        this._element = value;
    }

    constructor(private emailService: EmailService, private contentService: ContentService) {}

    ngOnInit() {
        this._bindEvents();
        this.element = this.emailService.selected_element;
    }

    ngDoCheck() {
        if (
            this.emailService.selected_element &&
            this.element !== this.emailService.selected_element[0]
          ) {
            this.element = this.emailService.selected_element[0];
        }
    }
}
