import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcustomerPage } from './reportcustomer.page';

describe('ReportcustomerPage', () => {
  let component: ReportcustomerPage;
  let fixture: ComponentFixture<ReportcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
