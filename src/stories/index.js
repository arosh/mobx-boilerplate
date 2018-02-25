// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bootstrap/dist/css/bootstrap.min.css';
import PlusOne from '../components/PlusOne';

storiesOf('PlusOne', module).add('default', () => (
  <PlusOne onClick={action('clicked')} />
));
