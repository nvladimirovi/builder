import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/shared/email/email.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: "app-spacing",
  templateUrl: "./spacing.component.html",
  styleUrls: ["./spacing.component.css"]
})
export class SpacingComponent implements OnInit, DoCheck {
  private _element: any = null;

  public set element(value: any) {
    this._element = value;
  }

  public get element(): any {
    return this._element;
  }

  public onPaddingTopChanged(value: number) {
    this.element.style.paddingTop = value + "px";
  }

  public onPaddingBottomChanged(value: number) {
    this.element.style.paddingBottom = value + "px";
  }

  public onPaddingLeftChanged(value: number) {
    this.element.style.paddingLeft = value + "px";
  }

  public onPaddingRightChanged(value: number) {
    this.element.style.paddingRight = value + "px";
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
