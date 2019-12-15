import { AttendanceSetupModule } from './attendance-setup.module';

describe('AttendanceSetupModule', () => {
  let attendanceSetupModule: AttendanceSetupModule;

  beforeEach(() => {
    attendanceSetupModule = new AttendanceSetupModule();
  });

  it('should create an instance', () => {
    expect(attendanceSetupModule).toBeTruthy();
  });
});
