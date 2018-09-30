import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import store from './redux/store/store';
import App, { history } from './components/App';

import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
