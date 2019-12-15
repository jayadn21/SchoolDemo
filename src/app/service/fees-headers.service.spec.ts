import { TestBed, inject } from '@angular/core/testing';

import { FeesHeadersService } from './fees-headers.service';

describe('FeesHeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesHeadersService]
    });
  });

  it('should be created', inject([FeesHeadersService], (service: FeesHeadersService) => {
    expect(service).toBeTruthy();
  }));
});
