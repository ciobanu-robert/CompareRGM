import { TestBed } from '@angular/core/testing';

import { GetProfileInfoService } from './get-profile-info.service';

describe('GetProfileInfoService', () => {
  let service: GetProfileInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProfileInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
