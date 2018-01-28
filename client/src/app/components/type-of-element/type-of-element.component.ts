import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-type-of-element',
  templateUrl: './type-of-element.component.html',
  styleUrls: ['./type-of-element.component.css']
})
export class TypeOfElementComponent implements OnInit, DoCheck {
  private _tagName: string;

  public get tagName(): string {
    return this._tagName;
  }

  public set tagName(value: string) {
    if (value) {
      this._tagName = value;
    }
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    if (this.emailService.selected_element[0]) {
      this.tagName = this.emailService.selected_element[0].tagName;
    }
  }

  ngDoCheck() {
    if (
      this.emailService.selected_element[0] &&
      this.tagName !== this.emailService.selected_element[0].tagName
    ) {
      this.tagName = this.emailService.selected_element[0].tagName;
      //console.log('type of element do check');
    }
  }
}
