import { TestBed } from '@angular/core/testing';

import { AuthGuardLoggedOutService } from './auth-guard-logged-out.service';

describe('AuthGuardLoggedOutService', () => {
  let service: AuthGuardLoggedOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLoggedOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
