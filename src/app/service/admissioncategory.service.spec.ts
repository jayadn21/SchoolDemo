import { TestBed, inject } from '@angular/core/testing';

import { AdmissioncategoryService } from './admissioncategory.service';

describe('AdmissioncategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissioncategoryService]
    });
  });

  it('should be created', inject([AdmissioncategoryService], (service: AdmissioncategoryService) => {
    expect(service).toBeTruthy();
  }));
});
