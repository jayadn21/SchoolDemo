import { ConsolidateMarksCardModule } from './consolidate-marks-card.module';

describe('ConsolidateMarksCardModule', () => {
  let consolidateMarksCardModule: ConsolidateMarksCardModule;

  beforeEach(() => {
    consolidateMarksCardModule = new ConsolidateMarksCardModule();
  });

  it('should create an instance', () => {
    expect(consolidateMarksCardModule).toBeTruthy();
  });
});
