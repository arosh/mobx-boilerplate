// @flow
import { inject } from 'mobx-react';
import {
  IncrementButton as IncrementButtonComponent,
  DecrementButton as DecrementButtonComponent,
} from '../components/Button';

export const IncrementButton = inject(stores => ({
  onClick: () => stores.rootStore.increment(),
}))(IncrementButtonComponent);

export const DecrementButton = inject(stores => ({
  onClick: () => stores.rootStore.decrement(),
}))(DecrementButtonComponent);
