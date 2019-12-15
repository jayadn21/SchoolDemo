import { TestBed, inject } from '@angular/core/testing';

import { ClasssectionService } from './classsection.service';

describe('ClasssectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClasssectionService]
    });
  });

  it('should be created', inject([ClasssectionService], (service: ClasssectionService) => {
    expect(service).toBeTruthy();
  }));
});
