import { TestBed, inject } from '@angular/core/testing';

import { ConsolidateAssessmentService } from './consolidate-assessment.service';

describe('ConsolidateAssessmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolidateAssessmentService]
    });
  });

  it('should be created', inject([ConsolidateAssessmentService], (service: ConsolidateAssessmentService) => {
    expect(service).toBeTruthy();
  }));
});
