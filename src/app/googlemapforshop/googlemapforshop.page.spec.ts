import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapforshopPage } from './googlemapforshop.page';

describe('GooglemapforshopPage', () => {
  let component: GooglemapforshopPage;
  let fixture: ComponentFixture<GooglemapforshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapforshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapforshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
