import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

interface RangeSettings {
  min: number,
  max: number
}

declare var $:any;

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit, DoCheck {
  private _current_element: any;
  private _range: any;

  private _initRangeSettings(settings: RangeSettings) {
    if (!$("#range")[0]) return;

    this.range = $("#range")[0];

    this.range.min = settings.min ? settings.min : 0;
    this.range.max = settings.max ? settings.max : 0;
  }

  private onRangeChange() {
    this.current_element[0].width = this.range.value;
    this.current_element[0].style.maxWidth = this.range.value + "px";
  }

  private onWidthChange(value) {
    this.current_element[0].width = value;
    this.current_element[0].style.maxWidth = value + "px";
  }

  private onHeightChange(value) {
    this.current_element[0].height = value;
  }
  
  public get range() : any {
    return this._range;
  }
  
  public set range(value : any) {
    this._range = value;
  }
  
  public get current_element() : any {
    return this._current_element;
  }
  
  public set current_element(value : any) {
    this._current_element = value;
  }
  
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.current_element = this.emailService.selected_element;
  }

  ngDoCheck() {
    this.current_element = this.emailService.selected_element;
    this._initRangeSettings({
      min: 10,
      max: 640
    });
  }
}