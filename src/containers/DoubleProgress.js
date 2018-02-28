// @flow
import { inject } from 'mobx-react';
import Progress from '../components/Progress';
import type { Stores } from '../stores';

export default inject(({ counterStore }: Stores) => ({
  now: counterStore.doubleCount,
}))(Progress);
