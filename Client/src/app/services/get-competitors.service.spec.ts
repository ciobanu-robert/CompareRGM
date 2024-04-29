import { TestBed } from '@angular/core/testing';

import { GetCompetitorsService } from './get-competitors.service';

describe('GetCompetitorsService', () => {
  let service: GetCompetitorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCompetitorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
