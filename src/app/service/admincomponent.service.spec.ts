import { TestBed, inject } from '@angular/core/testing';

import { AdmincomponentService } from './admincomponent.service';

describe('AdmincomponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmincomponentService]
    });
  });

  it('should be created', inject([AdmincomponentService], (service: AdmincomponentService) => {
    expect(service).toBeTruthy();
  }));
});
