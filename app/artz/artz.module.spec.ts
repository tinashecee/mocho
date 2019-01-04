import { ArtzModule } from './artz.module';

describe('ArtzModule', () => {
  let artzModule: ArtzModule;

  beforeEach(() => {
    artzModule = new ArtzModule();
  });

  it('should create an instance', () => {
    expect(artzModule).toBeTruthy();
  });
});
