import { TestBed } from '@angular/core/testing';

import { AccessJOBService } from './access-job.service';

describe('AccessJOBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessJOBService = TestBed.get(AccessJOBService);
    expect(service).toBeTruthy();
  });
});
