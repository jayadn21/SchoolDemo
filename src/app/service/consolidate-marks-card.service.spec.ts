import { TestBed, inject } from '@angular/core/testing';

import { ConsolidateMarksCardService } from './consolidate-marks-card.service';

describe('ConsolidateMarksCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolidateMarksCardService]
    });
  });

  it('should be created', inject([ConsolidateMarksCardService], (service: ConsolidateMarksCardService) => {
    expect(service).toBeTruthy();
  }));
});
