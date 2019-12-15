import { TestBed, inject } from '@angular/core/testing';

import { ReportSetupService } from './report-setup.service';

describe('ReportSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportSetupService]
    });
  });

  it('should be created', inject([ReportSetupService], (service: ReportSetupService) => {
    expect(service).toBeTruthy();
  }));
});
