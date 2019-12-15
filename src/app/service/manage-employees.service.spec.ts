import { TestBed, inject } from '@angular/core/testing';

import { ManageEmployeesService } from './manage-employees.service';

describe('ManageEmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageEmployeesService]
    });
  });

  it('should be created', inject([ManageEmployeesService], (service: ManageEmployeesService) => {
    expect(service).toBeTruthy();
  }));
});
