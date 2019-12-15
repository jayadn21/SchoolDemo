import { AssessmentHeadModule } from './assessment-head.module';

describe('AssessmentHeadModule', () => {
  let assessmentHeadModule: AssessmentHeadModule;

  beforeEach(() => {
    assessmentHeadModule = new AssessmentHeadModule();
  });

  it('should create an instance', () => {
    expect(assessmentHeadModule).toBeTruthy();
  });
});
