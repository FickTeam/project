import { TestBed } from '@angular/core/testing';

import { CusrequstsService } from './cusrequst.service';

describe('CusrequstsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CusrequstsService = TestBed.get(CusrequstsService);
    expect(service).toBeTruthy();
  });
});
