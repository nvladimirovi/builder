/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpacingComponent } from './spacing.component';

describe('SpacingComponent', () => {
  let component: SpacingComponent;
  let fixture: ComponentFixture<SpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
