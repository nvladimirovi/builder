import { Component, OnInit } from "@angular/core";

/**
 * This component uses range slider which
 * you can find here: https://www.npmjs.com/package/ion-rangeslider.
 * Demos : http://ionden.com/a/plugins/ion.rangeSlider/demo.html
 */

declare var $: any;

@Component({
	selector: "app-content-tools",
	templateUrl: "./content-tools.component.html",
	styleUrls: ["./content-tools.component.css"]
})
export class ContentToolsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("#range").ionRangeSlider({
      	max: 640
    });

    $(".tools-collapse .toggle").on("click", function() {
		$(this).toggleClass("active");
		$(this)
			.parent()
			.children(".inner-content")
			.toggleClass("active");
	});
  }
}
