import { TestBed, inject } from '@angular/core/testing';

import { AsetsService } from './asets.service';

describe('AsetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsetsService]
    });
  });

  it('should be created', inject([AsetsService], (service: AsetsService) => {
    expect(service).toBeTruthy();
  }));
});
