import { FeesHeadersModule } from './fees-headers.module';

describe('FeesHeadersModule', () => {
  let feesHeadersModule: FeesHeadersModule;

  beforeEach(() => {
    feesHeadersModule = new FeesHeadersModule();
  });

  it('should create an instance', () => {
    expect(feesHeadersModule).toBeTruthy();
  });
});
