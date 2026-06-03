import { TimeoutFilterException } from './timeout.filter';

describe('TimeoutFilter', () => {
  it('should be defined', () => {
    expect(new TimeoutFilterException()).toBeDefined();
  });
});
