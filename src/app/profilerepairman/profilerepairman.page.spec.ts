import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerepairmanPage } from './profilerepairman.page';

describe('ProfilerepairmanPage', () => {
  let component: ProfilerepairmanPage;
  let fixture: ComponentFixture<ProfilerepairmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilerepairmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilerepairmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
