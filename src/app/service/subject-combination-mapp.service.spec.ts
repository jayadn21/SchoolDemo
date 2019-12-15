import { TestBed, inject } from '@angular/core/testing';

import { SubjectCombinationMappService } from './subject-combination-mapp.service';

describe('SubjectCombinationMappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectCombinationMappService]
    });
  });

  it('should be created', inject([SubjectCombinationMappService], (service: SubjectCombinationMappService) => {
    expect(service).toBeTruthy();
  }));
});
