import React from 'react';
import ReactDOM from 'react-dom';

import './public/index.css';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById('root')
);
