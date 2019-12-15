import { TestBed, inject } from '@angular/core/testing';

import { AttendanceViewReportService } from './attendance-view-report.service';

describe('AttendanceViewReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendanceViewReportService]
    });
  });

  it('should be created', inject([AttendanceViewReportService], (service: AttendanceViewReportService) => {
    expect(service).toBeTruthy();
  }));
});
