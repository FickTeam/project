import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairmanPage } from './repairman.page';

describe('RepairmanPage', () => {
  let component: RepairmanPage;
  let fixture: ComponentFixture<RepairmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
