import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

interface RangeSettings {
  min: number;
  max: number;
}

declare var $: any;

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit, DoCheck {
  private _element: any = null;
  private _range: any = null;

  private onRangeChange(event) {
    this.element.width = event.target.value;
    this.element.style.maxWidth = event.target.value + "px";
  }

  private onWidthChange(value) {
    this.element.width = value;
    this.element.style.maxWidth = value + 'px';
  }

  private onHeightChange(value) {
    this.element.height = value;
  }

  public get range(): any {
    return this._range;
  }

  public set range(value: any) {
    this._range = value;
  }

  public get element(): any {
    return this._element;
  }

  public set element(value: any) {
    this._element = value;
  }

  constructor(private emailService: EmailService) { }

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
      //console.log('spacing do check');
    }
  }
}
