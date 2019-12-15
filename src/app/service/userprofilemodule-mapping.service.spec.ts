import { TestBed, inject } from '@angular/core/testing';

import { userprofilemoduleMappingService } from './userprofilemodule-mapping.service';

describe('userprofilemoduleMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [userprofilemoduleMappingService]
    });
  });

  it('should be created', inject([userprofilemoduleMappingService], (service: userprofilemoduleMappingService) => {
    expect(service).toBeTruthy();
  }));
});
