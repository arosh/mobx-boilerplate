// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootStore from './stores';
import { IncrementButton, DecrementButton } from './containers/Button';
import Progress from './containers/Progress';

const element = document.querySelector('#react-root');

if (element) {
  ReactDOM.render(
    <Provider rootStore={new rootStore()}>
      <React.Fragment>
        <IncrementButton />
        <DecrementButton />
        <Progress />
      </React.Fragment>
    </Provider>,
    element
  );
}
