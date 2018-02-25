// @flow
import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClick: () => void,
};

export default (props: Props) => (
  <Button onClick={() => props.onClick()}>+1</Button>
);
