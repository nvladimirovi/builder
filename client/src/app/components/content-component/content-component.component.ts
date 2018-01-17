import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { NgSwitch, NgSwitchDefault } from '@angular/common';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit, DoCheck {
  private _current_element: any;
  
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
  }
}
