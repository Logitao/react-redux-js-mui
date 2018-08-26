import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducers } from './main.reducer';

const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history)))
);
