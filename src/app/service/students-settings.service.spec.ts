import { TestBed, inject } from '@angular/core/testing';

import { StudentsSettingsService } from './students-settings.service';

describe('StudentsSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsSettingsService]
    });
  });

  it('should be created', inject([StudentsSettingsService], (service: StudentsSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
