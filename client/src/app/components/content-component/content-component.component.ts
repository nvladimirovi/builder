import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { NgSwitch, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit {
  @Input() props: any;

  constructor() { }

  ngOnInit() {
  }

}
