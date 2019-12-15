import { TestBed, inject } from '@angular/core/testing';

import { AccountingYearService } from './accounting-year.service';

describe('AccountingYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingYearService]
    });
  });

  it('should be created', inject([AccountingYearService], (service: AccountingYearService) => {
    expect(service).toBeTruthy();
  }));
});
