import React from 'react';
import ReactDOM from 'react-dom';

import './public/index.css';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/main/main.store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
