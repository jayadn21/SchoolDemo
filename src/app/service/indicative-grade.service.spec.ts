import { TestBed, inject } from '@angular/core/testing';

import { IndicativeGradeService } from './indicative-grade.service';

describe('IndicativeGradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicativeGradeService]
    });
  });

  it('should be created', inject([IndicativeGradeService], (service: IndicativeGradeService) => {
    expect(service).toBeTruthy();
  }));
});
