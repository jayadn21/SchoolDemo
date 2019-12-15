import { TestBed, inject } from '@angular/core/testing';

import { SubjectPageService } from './subject-page.service';

describe('SubjectPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectPageService]
    });
  });

  it('should be created', inject([SubjectPageService], (service: SubjectPageService) => {
    expect(service).toBeTruthy();
  }));
});
