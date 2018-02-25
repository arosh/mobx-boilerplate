// @flow
import { extendObservable, action, useStrict } from 'mobx';

useStrict(true);

class RootStore {
  count: number;
  constructor() {
    extendObservable(this, {
      count: 0,
    });
  }
  increment = action(() => {
    this.count++;
  })
  decrement = action(() => {
    this.count--;
  })
}

export default RootStore;
