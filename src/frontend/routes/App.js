import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import DashboardLayout from '../components/DashboardLayout';
import MainLayout from '../components/MainLayout';
import Sales from '../containers/Sales';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Inventory from '../containers/Inventory';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path="/" component={isLogged ? Sales : Login} layout={isLogged ? DashboardLayout : MainLayout} />
      <AppRoute
        exact
        path="/login"
        layout={MainLayout}
        component={Login}
      />
      <AppRoute
        exact
        path="/register"
        layout={MainLayout}
        component={Register}
      />
      <AppRoute
        exact
        path="/sales"
        layout={DashboardLayout}
        component={Sales}
      />
      <AppRoute
        exact
        path="/inventory"
        layout={DashboardLayout}
        component={Inventory}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
