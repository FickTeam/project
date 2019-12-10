import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrepairmanPage } from './reportrepairman.page';

describe('ReportrepairmanPage', () => {
  let component: ReportrepairmanPage;
  let fixture: ComponentFixture<ReportrepairmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportrepairmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrepairmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
