import { TestBed, inject } from '@angular/core/testing';

import { AttendanceSetupService } from './attendance-setup.service';

describe('AttendanceSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendanceSetupService]
    });
  });

  it('should be created', inject([AttendanceSetupService], (service: AttendanceSetupService) => {
    expect(service).toBeTruthy();
  }));
});
