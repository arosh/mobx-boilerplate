// @flow
import { inject } from 'mobx-react';
import Progress from '../components/Progress';

export default inject(stores => ({
  now: stores.rootStore.count,
}))(Progress);
