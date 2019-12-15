import { TestBed, inject } from '@angular/core/testing';

import { FacilityFeesService } from './facility-fees.service';

describe('FacilityFeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacilityFeesService]
    });
  });

  it('should be created', inject([FacilityFeesService], (service: FacilityFeesService) => {
    expect(service).toBeTruthy();
  }));
});
