// @flow
import React from 'react';
import { Grid } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { IncrementButton, DecrementButton } from '../containers/Button';
import Progress from '../containers/Progress';
import DoubleProgress from '../containers/DoubleProgress';

export default () => (
  <Grid>
    <IncrementButton />
    <DecrementButton />
    <Progress />
    <DoubleProgress />
  </Grid>
);
