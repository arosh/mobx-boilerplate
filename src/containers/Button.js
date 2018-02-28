// @flow
import { inject } from 'mobx-react';
import {
  IncrementButton as IncrementButtonComponent,
  DecrementButton as DecrementButtonComponent,
} from '../components/Button';
import type { Stores } from '../stores';

export const IncrementButton = inject(({ counterStore }: Stores) => ({
  onClick: counterStore.increment,
}))(IncrementButtonComponent);

export const DecrementButton = inject(({ counterStore }: Stores) => ({
  onClick: () => counterStore.decrement(),
}))(DecrementButtonComponent);
