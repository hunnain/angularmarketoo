import { TestBed } from '@angular/core/testing';

import { ReturnExchangeService } from './return-exchange.service';

describe('ReturnExchangeService', () => {
  let service: ReturnExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
