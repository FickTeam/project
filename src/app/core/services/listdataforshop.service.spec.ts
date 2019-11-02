import { TestBed } from '@angular/core/testing';

import { ListdataforshopService } from './listdataforshop.service';

describe('ListdataforshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListdataforshopService = TestBed.get(ListdataforshopService);
    expect(service).toBeTruthy();
  });
});
