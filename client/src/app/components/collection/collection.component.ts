import { Component, OnInit } from '@angular/core';
import { Collectable } from "app/shared/collectable/collectable.module";
//import { CollectableService } from "app/shared/collectable/collectable.service";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.css"]
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[] = [];

  removeFromCollection(item: Collectable) {
    
  }

  constructor() {}

  ngOnInit() {
    
  }
}
