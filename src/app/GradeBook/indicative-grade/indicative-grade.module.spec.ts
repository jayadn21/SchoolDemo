import { IndicativeGradeModule } from './indicative-grade.module';

describe('IndicativeGradeModule', () => {
  let indicativeGradeModule: IndicativeGradeModule;

  beforeEach(() => {
    indicativeGradeModule = new IndicativeGradeModule();
  });

  it('should create an instance', () => {
    expect(indicativeGradeModule).toBeTruthy();
  });
});
