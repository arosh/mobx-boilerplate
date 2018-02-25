// @flow
import * as React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClick: () => void,
};

export const IncrementButton = (props: Props) => <Button {...props}>+1</Button>;

export const DecrementButton = (props: Props) => <Button {...props}>-1</Button>;
