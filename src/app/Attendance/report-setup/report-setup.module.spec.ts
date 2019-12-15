import { ReportSetupModule } from './report-setup.module';

describe('ReportSetupModule', () => {
  let reportSetupModule: ReportSetupModule;

  beforeEach(() => {
    reportSetupModule = new ReportSetupModule();
  });

  it('should create an instance', () => {
    expect(reportSetupModule).toBeTruthy();
  });
});
