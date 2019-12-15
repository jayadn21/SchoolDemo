import { TestBed, inject } from '@angular/core/testing';

import { ExpenseAccountService } from './expense-account.service';

describe('ExpenseAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseAccountService]
    });
  });

  it('should be created', inject([ExpenseAccountService], (service: ExpenseAccountService) => {
    expect(service).toBeTruthy();
  }));
});
