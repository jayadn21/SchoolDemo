import { SubjectPageModule } from './subject-page.module';

describe('SubjectPageModule', () => {
  let subjectPageModule: SubjectPageModule;

  beforeEach(() => {
    subjectPageModule = new SubjectPageModule();
  });

  it('should create an instance', () => {
    expect(subjectPageModule).toBeTruthy();
  });
});
