import { TestBed, inject } from '@angular/core/testing';

import { GradeBookService } from './grade-book.service';

describe('GradeBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeBookService]
    });
  });

  it('should be created', inject([GradeBookService], (service: GradeBookService) => {
    expect(service).toBeTruthy();
  }));
});
