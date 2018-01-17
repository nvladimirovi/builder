import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output } from "@angular/core/src/metadata/directives";
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
	selector: "app-number-component",
	templateUrl: "./number-component.component.html",
	styleUrls: ["./number-component.component.css"]
})
export class NumberComponentComponent implements OnInit {
	@Input() public label: string;
	@Input() public value: number;
	@Output() public onValueChanged = new EventEmitter<number>();

  	public dec() {
		if (this.value >= 0) {
			this.value--;
			this.onValueChanged.emit(this.value);
		}
	}

  	public inc() {
		this.value++;
		this.onValueChanged.emit(this.value);
	}

	public onChange(data: number) {
		this.value = data;
		this.onValueChanged.emit(this.value);
	}

	constructor() { }

  	ngOnInit() {}
}
