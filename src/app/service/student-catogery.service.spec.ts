import { TestBed, inject } from '@angular/core/testing';

import { StudentCatogeryService } from './student-catogery.service';

describe('StudentCatogeryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCatogeryService]
    });
  });

  it('should be created', inject([StudentCatogeryService], (service: StudentCatogeryService) => {
    expect(service).toBeTruthy();
  }));
});
