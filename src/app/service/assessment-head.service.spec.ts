import { TestBed, inject } from '@angular/core/testing';

import { AssessmentHeadService } from './assessment-head.service';

describe('AssessmentHeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentHeadService]
    });
  });

  it('should be created', inject([AssessmentHeadService], (service: AssessmentHeadService) => {
    expect(service).toBeTruthy();
  }));
});
