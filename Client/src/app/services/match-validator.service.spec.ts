import { TestBed } from '@angular/core/testing';

import { MatchValidatorService } from './match-validator.service';

describe('MatchValidatorService', () => {
  let service: MatchValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
