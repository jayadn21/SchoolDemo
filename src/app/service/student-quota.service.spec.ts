import { TestBed, inject } from '@angular/core/testing';

import { StudentQuotaService } from './student-quota.service';

describe('StudentQuotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentQuotaService]
    });
  });

  it('should be created', inject([StudentQuotaService], (service: StudentQuotaService) => {
    expect(service).toBeTruthy();
  }));
});
