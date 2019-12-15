import { TestBed, inject } from '@angular/core/testing';

import { AssignCombinationService } from './assign-combination.service';

describe('AssignCombinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignCombinationService]
    });
  });

  it('should be created', inject([AssignCombinationService], (service: AssignCombinationService) => {
    expect(service).toBeTruthy();
  }));
});
