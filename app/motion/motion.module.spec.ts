import { MotionModule } from './motion.module';

describe('MotionModule', () => {
  let motionModule: MotionModule;

  beforeEach(() => {
    motionModule = new MotionModule();
  });

  it('should create an instance', () => {
    expect(motionModule).toBeTruthy();
  });
});
