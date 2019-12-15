import { EventTypeModule } from './event-type.module';

describe('EventTypeModule', () => {
  let eventTypeModule: EventTypeModule;

  beforeEach(() => {
    eventTypeModule = new EventTypeModule();
  });

  it('should create an instance', () => {
    expect(eventTypeModule).toBeTruthy();
  });
});
