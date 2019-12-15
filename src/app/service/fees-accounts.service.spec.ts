import { TestBed, inject } from '@angular/core/testing';

import { FeesAccountsService } from './fees-accounts.service';

describe('FeesAccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesAccountsService]
    });
  });

  it('should be created', inject([FeesAccountsService], (service: FeesAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
