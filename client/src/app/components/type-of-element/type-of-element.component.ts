import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-type-of-element',
  templateUrl: './type-of-element.component.html',
  styleUrls: ['./type-of-element.component.css']
})
export class TypeOfElementComponent implements OnInit {
  @Input() tagName: string;

  constructor() { }

  ngOnInit() {
  }

}
