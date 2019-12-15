import { StudentCatogeryModule } from './student-catogery.module';

describe('StudentCatogeryModule', () => {
  let studentCatogeryModule: StudentCatogeryModule;

  beforeEach(() => {
    studentCatogeryModule = new StudentCatogeryModule();
  });

  it('should create an instance', () => {
    expect(studentCatogeryModule).toBeTruthy();
  });
});
