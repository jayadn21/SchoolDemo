import { GradesModule } from './grades.module';

describe('GradesModule', () => {
  let gradesModule: GradesModule;

  beforeEach(() => {
    gradesModule = new GradesModule();
  });

  it('should create an instance', () => {
    expect(gradesModule).toBeTruthy();
  });
});
