import { TestBed, inject } from '@angular/core/testing';

import { OpeningBalanceService } from './opening-balance.service';

describe('OpeningBalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpeningBalanceService]
    });
  });

  it('should be created', inject([OpeningBalanceService], (service: OpeningBalanceService) => {
    expect(service).toBeTruthy();
  }));
});
