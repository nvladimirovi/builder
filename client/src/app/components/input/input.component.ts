import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() targetName: string;
  @Input() targetPropertyName: string;
  @Input() targetProperty: string | number;
  @Output() onPropertyChange = new EventEmitter<string>();

  public handleChange(value) {
    this.onPropertyChange.emit(value);
  }

  constructor() {}

  ngOnInit() {}
}
