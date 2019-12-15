import { TestBed, inject } from '@angular/core/testing';

import { ExpenseHeadersService } from './expense-headers.service';

describe('ExpenseHeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseHeadersService]
    });
  });

  it('should be created', inject([ExpenseHeadersService], (service: ExpenseHeadersService) => {
    expect(service).toBeTruthy();
  }));
});
