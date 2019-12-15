import { ConsolidateAssessmentModule } from './consolidate-assessment.module';

describe('ConsolidateAssessmentModule', () => {
  let consolidateAssessmentModule: ConsolidateAssessmentModule;

  beforeEach(() => {
    consolidateAssessmentModule = new ConsolidateAssessmentModule();
  });

  it('should create an instance', () => {
    expect(consolidateAssessmentModule).toBeTruthy();
  });
});
