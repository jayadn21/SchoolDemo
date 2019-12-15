import { TestBed, inject } from '@angular/core/testing';

import { PracticalClassesService } from './practical-classes.service';

describe('PracticalClassesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracticalClassesService]
    });
  });

  it('should be created', inject([PracticalClassesService], (service: PracticalClassesService) => {
    expect(service).toBeTruthy();
  }));
});
