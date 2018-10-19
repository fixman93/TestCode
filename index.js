import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { ConnectedRouter } from 'react-router-redux';
//import history from './js/history';
//import store from './js/store';
//import Routes from './js/Routes';
const store = null; // TODO: reactivate React/Redux later
const history = null;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} />
  </Provider>,
  document.getElementById('root')
);
