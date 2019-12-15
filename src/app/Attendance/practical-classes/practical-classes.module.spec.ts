import { PracticalClassesModule } from './practical-classes.module';

describe('PracticalClassesModule', () => {
  let practicalClassesModule: PracticalClassesModule;

  beforeEach(() => {
    practicalClassesModule = new PracticalClassesModule();
  });

  it('should create an instance', () => {
    expect(practicalClassesModule).toBeTruthy();
  });
});
