import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { NgSwitch, NgSwitchDefault } from '@angular/common';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { ContentService } from 'app/shared/content/content.service';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit, DoCheck {
  private _element: any;

  public get element(): any {
    return this._element;
  }

  public set element(value: any) {
    this._element = value;
  }

  /**
   * When change is detected change the src attr.
   * @param value Source
   */
  private onSrcChange(value: string) {
    this.element.src = value;
  }

  /**
   * When change is detected change the alt attr.
   * @param value Alternate
   */
  private onAltChange(value: string) {
    this.element.alt = value;
  }

  /**
   * When change is detected change the href.
   * @param value Hyberlink
   */
  private onHrefChange(value: string) {
    this.element.href = value;
  }

  /**
   * When change is detected change background style attr.
   * @param value Background
   */
  private onBackgroundChange(value: string) {
    this.element.style.backgroundColor = value;
  }

  /**
   * Get the background color.
   */
  private getBackground(): string {
    if (this._element.style.backgroundColor !== '') {
      return this.element ? this.contentService.rgbToHex(this.element.style.backgroundColor) : null;
    }
  }

  constructor(private emailService: EmailService, private contentService: ContentService) {}

  ngOnInit() {
    if (this.emailService.selected_element) {
      this.element = this.emailService.selected_element[0];
    }
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
