import { StudentsDatabaseModule } from './students-database.module';

describe('StudentsDatabaseModule', () => {
  let studentsDatabaseModule: StudentsDatabaseModule;

  beforeEach(() => {
    studentsDatabaseModule = new StudentsDatabaseModule();
  });

  it('should create an instance', () => {
    expect(studentsDatabaseModule).toBeTruthy();
  });
});
