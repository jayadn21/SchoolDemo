import { ManageEmployeesModule } from './manage-employees.module';

describe('ManageEmployeesModule', () => {
  let manageEmployeesModule: ManageEmployeesModule;

  beforeEach(() => {
    manageEmployeesModule = new ManageEmployeesModule();
  });

  it('should create an instance', () => {
    expect(manageEmployeesModule).toBeTruthy();
  });
});
