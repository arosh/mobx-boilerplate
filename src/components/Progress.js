// @flow
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

type Props = {
  now: number,
};

export default (props: Props) => <ProgressBar now={props.now} />;
