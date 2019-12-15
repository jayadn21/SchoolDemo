import { StudentsSettingsModule } from './students-settings.module';

describe('StudentsSettingsModule', () => {
  let studentsSettingsModule: StudentsSettingsModule;

  beforeEach(() => {
    studentsSettingsModule = new StudentsSettingsModule();
  });

  it('should create an instance', () => {
    expect(studentsSettingsModule).toBeTruthy();
  });
});
