import { TestBed, inject } from '@angular/core/testing';

import { AdmissionEnquiryService } from './admission-enquiry.service';

describe('AdmissionEnquiryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionEnquiryService]
    });
  });

  it('should be created', inject([AdmissionEnquiryService], (service: AdmissionEnquiryService) => {
    expect(service).toBeTruthy();
  }));
});
