import { TestBed, inject } from '@angular/core/testing';

import { FeesTemplateService } from './fees-template.service';

describe('FeesTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesTemplateService]
    });
  });

  it('should be created', inject([FeesTemplateService], (service: FeesTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
