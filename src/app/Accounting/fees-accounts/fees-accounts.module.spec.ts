import { FeesAccountsModule } from './fees-accounts.module';

describe('FeesAccountsModule', () => {
  let feesAccountsModule: FeesAccountsModule;

  beforeEach(() => {
    feesAccountsModule = new FeesAccountsModule();
  });

  it('should create an instance', () => {
    expect(feesAccountsModule).toBeTruthy();
  });
});
