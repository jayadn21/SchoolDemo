import { SubjectCombinationMappModule } from './subject-combination-mapp.module';

describe('SubjectCombinationMappModule', () => {
  let subjectCombinationMappModule: SubjectCombinationMappModule;

  beforeEach(() => {
    subjectCombinationMappModule = new SubjectCombinationMappModule();
  });

  it('should create an instance', () => {
    expect(subjectCombinationMappModule).toBeTruthy();
  });
});
