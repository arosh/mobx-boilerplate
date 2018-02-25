// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bootstrap/dist/css/bootstrap.min.css';
import { IncrementButton } from '../components/Button';
import Progress from '../components/Progress';

storiesOf('PlusOne', module).add('default', () => (
  <IncrementButton onClick={action('clicked')} />
));

storiesOf('Progress', module).add('default', () => <Progress now={33} />);
