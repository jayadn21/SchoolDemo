import { MarkAttendanceModule } from './mark-attendance.module';

describe('MarkAttendanceModule', () => {
  let markAttendanceModule: MarkAttendanceModule;

  beforeEach(() => {
    markAttendanceModule = new MarkAttendanceModule();
  });

  it('should create an instance', () => {
    expect(markAttendanceModule).toBeTruthy();
  });
});
