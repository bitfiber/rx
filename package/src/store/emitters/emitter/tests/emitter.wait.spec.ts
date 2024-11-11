import {emitter, Emitter, state} from '@bitfiber/rx';
import {Subject} from 'rxjs';

describe('@bitfiber/rx/store/emitter/wait', () => {
  let testEmitter: Emitter<string>;

  beforeEach(() => {
    testEmitter = emitter<string>();
  });

  it('Emitter waits for other emitters and then emits once', done => {
    const someEmitter1 = emitter<string>();
    const someEmitter2 = emitter<number>();
    const result: string[] = [];

    testEmitter
      .wait(someEmitter1, someEmitter2, () => 'resultValue')
      .tap(v => {
        result.push(v);
      });

    someEmitter1.emit('value1');
    someEmitter2.emit(1);
    setTimeout(() => {
      someEmitter1.emit('value2');
      someEmitter2.emit(2);
      setTimeout(() => {
        expect(result).toEqual(['resultValue']);
        done();
      }, 30);
    }, 30);
  });

  it('Emitter waits for states and then emits once', done => {
    const someState1 = state<string>('value1');
    const someState2 = state<number>(2);
    const result: string[] = [];

    testEmitter
      .tap(v => {
        result.push(v);
      })
      .wait(someState1, someState2, () => 'resultValue');

    someState1.set('value2');
    someState2.set(2);
    setTimeout(() => {
      someState1.set('value3');
      someState2.set(3);
      setTimeout(() => {
        expect(result).toEqual(['resultValue']);
        done();
      }, 30);
    }, 30);
  });

  it('Emitter waits for observables and then emits once', done => {
    const subject1 = new Subject<string>();
    const subject2 = new Subject<number>();
    const result: string[] = [];

    testEmitter
      .wait(subject1.asObservable(), subject2.asObservable(), () => 'resultValue')
      .tap(v => {
        result.push(v);
      });

    subject1.next('value1');
    subject2.next(1);
    setTimeout(() => {
      subject1.next('value2');
      subject2.next(2);
      setTimeout(() => {
        expect(result).toEqual(['resultValue']);
        done();
      }, 30);
    }, 30);
  });

  it('Emitter waits for different sources and then emits once', done => {
    const subject = new Subject<string>();
    const someState = state<string>('');
    const someEmitter = emitter<string>();
    const result: string[] = [];

    testEmitter
      .wait(subject, someState, someEmitter, () => 'resultValue')
      .tap(v => {
        result.push(v);
      });

    subject.next('value1');
    someState.set('value1');
    someEmitter.emit('value1');
    setTimeout(() => {
      subject.next('value2');
      someState.set('value2');
      someEmitter.emit('value2');
      setTimeout(() => {
        expect(result).toEqual(['resultValue']);
        done();
      }, 30);
    }, 30);
  });
});
