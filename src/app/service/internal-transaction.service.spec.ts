import { TestBed, inject } from '@angular/core/testing';

import { InternalTransactionService } from './internal-transaction.service';

describe('InternalTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternalTransactionService]
    });
  });

  it('should be created', inject([InternalTransactionService], (service: InternalTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
