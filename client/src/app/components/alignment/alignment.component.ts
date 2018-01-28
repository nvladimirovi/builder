import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: "app-alignment",
  templateUrl: "./alignment.component.html",
  styleUrls: ["./alignment.component.css"]
})
export class AlignmentComponent implements OnInit, DoCheck {
  private _element: any;

  public set element(value: any) {
    this._element = value;
  }

  public get element() : any {
    return this._element;
  }
  
  constructor(private emailService: EmailService) {}

  ngOnInit() {
    if (this.emailService.selected_element) {
      this.element = this.emailService.selected_element[0];
    }
  }

  ngDoCheck() {
    if (this.emailService.selected_element) {
      this.element = this.emailService.selected_element[0];
    }
  }
}
