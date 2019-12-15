import { AdmissionEnquiryModule } from './admission-enquiry.module';

describe('AdmissionEnquiryModule', () => {
  let admissionEnquiryModule: AdmissionEnquiryModule;

  beforeEach(() => {
    admissionEnquiryModule = new AdmissionEnquiryModule();
  });

  it('should create an instance', () => {
    expect(admissionEnquiryModule).toBeTruthy();
  });
});
