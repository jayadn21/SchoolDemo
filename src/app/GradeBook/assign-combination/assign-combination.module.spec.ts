import { AssignCombinationModule } from './assign-combination.module';

describe('AssignCombinationModule', () => {
  let assignCombinationModule: AssignCombinationModule;

  beforeEach(() => {
    assignCombinationModule = new AssignCombinationModule();
  });

  it('should create an instance', () => {
    expect(assignCombinationModule).toBeTruthy();
  });
});
