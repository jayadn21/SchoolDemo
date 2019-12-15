import { RemarkModule } from './remark.module';

describe('RemarkModule', () => {
  let remarkModule: RemarkModule;

  beforeEach(() => {
    remarkModule = new RemarkModule();
  });

  it('should create an instance', () => {
    expect(remarkModule).toBeTruthy();
  });
});
