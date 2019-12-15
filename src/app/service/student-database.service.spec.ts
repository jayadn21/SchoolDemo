import { TestBed, inject } from '@angular/core/testing';

import { StudentDatabaseService } from './student-database.service';

describe('StudentDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDatabaseService]
    });
  });

  it('should be created', inject([StudentDatabaseService], (service: StudentDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
