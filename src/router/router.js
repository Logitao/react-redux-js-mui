import App from '../components/App';
import { Route } from 'react-router';
import React from 'react';

const routes = [
  {
    path: '/',
    component: App
  }
];

const UserRoutes = () => (
  <div>
    {routes.map((routeItem, index) => {
      <Route
        path={routeItem.path}
        component={routeItem.component}
        key={index}
      />;
    })}
  </div>
);
export default UserRoutes;
