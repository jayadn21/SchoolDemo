import { TestBed, inject } from '@angular/core/testing';

import { GetinstituteuserService } from './getinstituteuser.service';

describe('GetinstituteuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetinstituteuserService]
    });
  });

  it('should be created', inject([GetinstituteuserService], (service: GetinstituteuserService) => {
    expect(service).toBeTruthy();
  }));
});
