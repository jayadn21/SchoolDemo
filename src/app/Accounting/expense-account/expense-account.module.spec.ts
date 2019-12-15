import { ExpenseAccountModule } from './expense-account.module';

describe('ExpenseAccountModule', () => {
  let expenseAccountModule: ExpenseAccountModule;

  beforeEach(() => {
    expenseAccountModule = new ExpenseAccountModule();
  });

  it('should create an instance', () => {
    expect(expenseAccountModule).toBeTruthy();
  });
});
