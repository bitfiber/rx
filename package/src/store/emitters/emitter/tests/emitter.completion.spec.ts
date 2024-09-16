import {emitter, Emitter} from '@bitfiber/rx';

describe('@bitfiber/rx/store/emitter/completion', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter is not completed', () => {
    expect(testEmitter.isCompleted()).toBeFalsy();
  });

  it('Emitter is completed', () => {
    testEmitter.complete();
    expect(testEmitter.isCompleted()).toBeTruthy();
  });
});
