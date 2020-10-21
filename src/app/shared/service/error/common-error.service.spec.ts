import { TestBed, inject } from '@angular/core/testing';

import { CommonErrorService } from './common-error.service';

describe('CommonErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonErrorService]
    });
  });

  it('should be created', inject([CommonErrorService], (service: CommonErrorService) => {
    expect(service).toBeTruthy();
  }));
});
