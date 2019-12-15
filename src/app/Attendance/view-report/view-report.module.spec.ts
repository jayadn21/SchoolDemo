import { ViewReportModule } from './view-report.module';

describe('ViewReportModule', () => {
  let viewReportModule: ViewReportModule;

  beforeEach(() => {
    viewReportModule = new ViewReportModule();
  });

  it('should create an instance', () => {
    expect(viewReportModule).toBeTruthy();
  });
});
