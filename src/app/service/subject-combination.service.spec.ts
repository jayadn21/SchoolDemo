import { TestBed, inject } from '@angular/core/testing';

import { SubjectCombinationService } from './subject-combination.service';

describe('SubjectCombinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectCombinationService]
    });
  });

  it('should be created', inject([SubjectCombinationService], (service: SubjectCombinationService) => {
    expect(service).toBeTruthy();
  }));
});
