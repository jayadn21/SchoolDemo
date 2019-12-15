import { AdmissionTicketModule } from './admission-ticket.module';

describe('AdmissionTicketModule', () => {
  let admissionTicketModule: AdmissionTicketModule;

  beforeEach(() => {
    admissionTicketModule = new AdmissionTicketModule();
  });

  it('should create an instance', () => {
    expect(admissionTicketModule).toBeTruthy();
  });
});
