import { SessionRoutingModule } from './session-routing.module';

describe('SessionRoutingModule', () => {
  let sessionRoutingModule: SessionRoutingModule;

  beforeEach(() => {
    sessionRoutingModule = new SessionRoutingModule();
  });

  it('should create an instance', () => {
    expect(sessionRoutingModule).toBeTruthy();
  });
});
