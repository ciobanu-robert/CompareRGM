import { TestBed } from '@angular/core/testing';

import { CompareGuardService } from './compare-guard.service';

describe('CompareGuardService', () => {
  let service: CompareGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
