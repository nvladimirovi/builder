import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
	selector: "app-number-component",
	templateUrl: "./number-component.component.html",
	styleUrls: ["./number-component.component.css"]
})
export class NumberComponentComponent implements OnInit {
	@Input() private label: string;
	private value: number = 0;

  	constructor() {}

  	dec() {
		if (this.value >= 1) {
			this.value--;
		}
	}

  	inc() {
		if (this.value <= 100) {
			this.value++;
		}
	}

  	ngOnInit() {}
}
