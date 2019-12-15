import { TestBed, inject } from '@angular/core/testing';

import { FeesTemplateFeesAccountMappingService } from './fees-template-fees-account-mapping.service';

describe('FeesTemplateFeesAccountMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesTemplateFeesAccountMappingService]
    });
  });

  it('should be created', inject([FeesTemplateFeesAccountMappingService], (service: FeesTemplateFeesAccountMappingService) => {
    expect(service).toBeTruthy();
  }));
});
