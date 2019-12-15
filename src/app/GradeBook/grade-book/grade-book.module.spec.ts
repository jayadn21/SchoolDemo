import { GradeBookModule } from './grade-book.module';

describe('GradeBookModule', () => {
  let gradeBookModule: GradeBookModule;

  beforeEach(() => {
    gradeBookModule = new GradeBookModule();
  });

  it('should create an instance', () => {
    expect(gradeBookModule).toBeTruthy();
  });
});
