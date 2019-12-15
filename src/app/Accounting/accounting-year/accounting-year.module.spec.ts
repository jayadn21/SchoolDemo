import { AccountingYearModule } from './accounting-year.module';

describe('AccountingYearModule', () => {
  let accountingYearModule: AccountingYearModule;

  beforeEach(() => {
    accountingYearModule = new AccountingYearModule();
  });

  it('should create an instance', () => {
    expect(accountingYearModule).toBeTruthy();
  });
});
