import { TestBed, inject } from '@angular/core/testing';

import { AdmissionTicketService } from './admission-ticket.service';

describe('AdmissionTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionTicketService]
    });
  });

  it('should be created', inject([AdmissionTicketService], (service: AdmissionTicketService) => {
    expect(service).toBeTruthy();
  }));
});
