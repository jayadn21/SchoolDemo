import { IndirectAccountModule } from './indirect-account.module';

describe('IndirectAccountModule', () => {
  let indirectAccountModule: IndirectAccountModule;

  beforeEach(() => {
    indirectAccountModule = new IndirectAccountModule();
  });

  it('should create an instance', () => {
    expect(indirectAccountModule).toBeTruthy();
  });
});
