import { TestBed } from '@angular/core/testing';

import { ImageRatioValidatorService } from './image-ratio-validator.service';

describe('ImageRatioValidatorService', () => {
  let service: ImageRatioValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRatioValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
