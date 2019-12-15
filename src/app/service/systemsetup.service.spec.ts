import { TestBed, inject } from '@angular/core/testing';

import { SystemsetupService } from './systemsetup.service';

describe('SystemsetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemsetupService]
    });
  });

  it('should be created', inject([SystemsetupService], (service: SystemsetupService) => {
    expect(service).toBeTruthy();
  }));
});
