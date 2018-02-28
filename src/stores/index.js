// @flow
import { observable, action, computed, useStrict } from 'mobx';

useStrict(true);

export class CounterStore {
  @observable count = 0;

  @computed
  get doubleCount(): number {
    return this.count * 2;
  }

  @action.bound
  increment = () => {
    this.count = Math.min(100, this.count + 5);
  };

  @action.bound
  decrement = () => {
    this.count = Math.max(0, this.count - 5);
  };
}

export type Stores = {
  counterStore: CounterStore,
};

const createStores: () => Stores = () => ({
  counterStore: new CounterStore(),
});

export default createStores;
