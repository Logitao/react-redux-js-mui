import React from 'react';
import ReactDOM from 'react-dom';

import './public/index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/main/main.store';

import RouteWithSubRoutes from './router/subrouter';

const routes = [
    {
        path: '/',
        component: App
    }
];

const routeComponents = routes.map(route => (
    <RouteWithSubRoutes key={route.path} {...route} />
));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <div>{routeComponents}</div>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
