import { FacilityFeesModule } from './facility-fees.module';

describe('FacilityFeesModule', () => {
  let facilityFeesModule: FacilityFeesModule;

  beforeEach(() => {
    facilityFeesModule = new FacilityFeesModule();
  });

  it('should create an instance', () => {
    expect(facilityFeesModule).toBeTruthy();
  });
});
