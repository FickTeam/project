import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadconditionPage } from './badcondition.page';

describe('BadconditionPage', () => {
  let component: BadconditionPage;
  let fixture: ComponentFixture<BadconditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadconditionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadconditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
