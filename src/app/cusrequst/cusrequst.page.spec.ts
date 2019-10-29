import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusrequstPage } from './cusrequst.page';

describe('CusrequstPage', () => {
  let component: CusrequstPage;
  let fixture: ComponentFixture<CusrequstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusrequstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusrequstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
