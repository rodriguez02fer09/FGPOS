import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';
import DashboardLayout from '../components/DashboardLayout';
import Sales from '../containers/Sales';
import LoginContainer from '../containers/Login';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />{' '}
      </Layout>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path="/" layout={Layout} component={LoginContainer} />
      <AppRoute
        exact
        path="/sales"
        layout={DashboardLayout}
        component={Sales}
      />
      <AppRoute
        exact
        path="/login"
        layout={Layout}
        component={LoginContainer}
      />
      <AppRoute layout={Layout} component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
