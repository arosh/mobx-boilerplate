// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import createStores from './stores';
import App from './containers/App';

const stores = createStores();

const element = document.querySelector('#react-root');

if (element) {
  ReactDOM.render(
    <React.Fragment>
      <Provider {...stores}>
        <App />
      </Provider>
    </React.Fragment>,
    element
  );
}
