import { SubModulesModule } from './sub-modules.module';

describe('SubModulesModule', () => {
  let subModulesModule: SubModulesModule;

  beforeEach(() => {
    subModulesModule = new SubModulesModule();
  });

  it('should create an instance', () => {
    expect(subModulesModule).toBeTruthy();
  });
});
