import { FeesManagementModule } from './fees-management.module';

describe('FeesManagementModule', () => {
  let feesManagementModule: FeesManagementModule;

  beforeEach(() => {
    feesManagementModule = new FeesManagementModule();
  });

  it('should create an instance', () => {
    expect(feesManagementModule).toBeTruthy();
  });
});
