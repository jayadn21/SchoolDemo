import { InternalTransactionModule } from './internal-transaction.module';

describe('InternalTransactionModule', () => {
  let internalTransactionModule: InternalTransactionModule;

  beforeEach(() => {
    internalTransactionModule = new InternalTransactionModule();
  });

  it('should create an instance', () => {
    expect(internalTransactionModule).toBeTruthy();
  });
});
