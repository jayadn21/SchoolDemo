import { SubjectCombinationModule } from './subject-combination.module';

describe('SubjectCombinationModule', () => {
  let subjectCombinationModule: SubjectCombinationModule;

  beforeEach(() => {
    subjectCombinationModule = new SubjectCombinationModule();
  });

  it('should create an instance', () => {
    expect(subjectCombinationModule).toBeTruthy();
  });
});
