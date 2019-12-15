import { TestBed, inject } from '@angular/core/testing';

import { MarkAttendanceService } from './mark-attendance.service';

describe('MarkAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkAttendanceService]
    });
  });

  it('should be created', inject([MarkAttendanceService], (service: MarkAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
