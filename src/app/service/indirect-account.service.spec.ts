import { TestBed, inject } from '@angular/core/testing';

import { IndirectAccountService } from './indirect-account.service';

describe('IndirectAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndirectAccountService]
    });
  });

  it('should be created', inject([IndirectAccountService], (service: IndirectAccountService) => {
    expect(service).toBeTruthy();
  }));
});
