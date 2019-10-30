import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecustomerPage } from './profilecustomer.page';

describe('ProfilecustomerPage', () => {
  let component: ProfilecustomerPage;
  let fixture: ComponentFixture<ProfilecustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
