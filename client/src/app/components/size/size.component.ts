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
  private _element: any;
  private _range: any;

  private _initRangeSettings(settings: RangeSettings) {
    if (!$("#range")[0]) return;

    this.range = $("#range")[0];

    this.range.min = settings.min ? settings.min : 0;
    this.range.max = settings.max ? settings.max : 0;
  }

  private onRangeChange() {
    this.element.width = this.range.value;
    this.element.style.maxWidth = this.range.value + "px";
  }

  private onWidthChange(value) {
    this.element.width = value;
    this.element.style.maxWidth = value + "px";
  }

  private onHeightChange(value) {
    this.element.height = value;
  }
  
  public get range() : any {
    return this._range;
  }
  
  public set range(value : any) {
    this._range = value;
  }
  
  public get element() : any {
    return this._element;
  }
  
  public set element(value : any) {
    this._element = value;
  }
  
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.element = this.emailService.selected_element;
  }

  ngDoCheck() {
    
    if(this.emailService.selected_element) {
      this.element = this.emailService.selected_element[0];
      this._initRangeSettings({ min: 10, max: 640 });
    }
    
  }
}