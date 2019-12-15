import { FeesTemplateModule } from './fees-template.module';

describe('FeesTemplateModule', () => {
  let feesTemplateModule: FeesTemplateModule;

  beforeEach(() => {
    feesTemplateModule = new FeesTemplateModule();
  });

  it('should create an instance', () => {
    expect(feesTemplateModule).toBeTruthy();
  });
});
