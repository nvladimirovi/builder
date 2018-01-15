import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-number-component",
	templateUrl: "./number-component.component.html",
	styleUrls: ["./number-component.component.css"]
})
export class NumberComponentComponent implements OnInit {
	value: number = 0;

  	constructor() {}

  	dec() {
		if (this.value !== 1) {
			this.value--;
		}
		console.log("dec", this.value);	 
	}

  	inc() {
		if (this.value !== 100) {
			this.value++;
		}
		console.log("inc", this.value);	 
	}

  	ngOnInit() {}
}
