import { ExpenseHeadersModule } from './expense-headers.module';

describe('ExpenseHeadersModule', () => {
  let expenseHeadersModule: ExpenseHeadersModule;

  beforeEach(() => {
    expenseHeadersModule = new ExpenseHeadersModule();
  });

  it('should create an instance', () => {
    expect(expenseHeadersModule).toBeTruthy();
  });
});
