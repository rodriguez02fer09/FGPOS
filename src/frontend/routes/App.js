import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import NotFound from '../containers/NotFound';
import DashboardLayout from '../components/DashboardLayout';
import MainLayout from '../components/MainLayout';
import Sales from '../containers/Sales';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Inventory from '../containers/Inventory';
import Invoices from '../containers/Invoices';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <ToastProvider placement="top-center" autoDismissTimeout={3000} autoDismiss={true}>
        <Layout>
          <Component {...props} />
        </Layout>
      </ToastProvider>
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
        component={isLogged ? Sales : Login}
        layout={isLogged ? DashboardLayout : MainLayout}
      />
      <AppRoute
        exact
        path="/register"
        component={isLogged ? Sales : Register}
        layout={isLogged ? DashboardLayout : MainLayout}
      />
      <AppRoute
        exact
        path="/sales"
        component={isLogged ? Sales : Login}
        layout={isLogged ? DashboardLayout : MainLayout}
      />
      <AppRoute
        exact
        path="/inventory"
        component={isLogged ? Inventory : Login}
        layout={isLogged ? DashboardLayout : MainLayout}
      />
      <AppRoute
        exact
        path="/invoices"
        component={isLogged ? Invoices : Login}
        layout={isLogged ? DashboardLayout : MainLayout}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
