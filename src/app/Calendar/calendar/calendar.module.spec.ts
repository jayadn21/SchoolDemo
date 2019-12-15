import { CalendarModule } from './calendar.module';

describe('CalenderModule', () => {
  let calendarModule: CalendarModule;

  beforeEach(() => {
    calendarModule = new CalendarModule();
  });

  it('should create an instance', () => {
    expect(CalendarModule).toBeTruthy();
  });
});
