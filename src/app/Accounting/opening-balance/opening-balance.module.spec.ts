import { OpeningBalanceModule } from './opening-balance.module';

describe('OpeningBalanceModule', () => {
  let openingBalanceModule: OpeningBalanceModule;

  beforeEach(() => {
    openingBalanceModule = new OpeningBalanceModule();
  });

  it('should create an instance', () => {
    expect(openingBalanceModule).toBeTruthy();
  });
});
