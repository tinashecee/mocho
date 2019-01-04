import { MusikModule } from './musik.module';

describe('MusikModule', () => {
  let musikModule: MusikModule;

  beforeEach(() => {
    musikModule = new MusikModule();
  });

  it('should create an instance', () => {
    expect(musikModule).toBeTruthy();
  });
});
