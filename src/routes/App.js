import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';
import DashboardLayout from '../components/DashboardLayout';
import Sales from '../containers/Sales';

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
      <AppRoute exact path="/" layout={Layout} component={Home} />{' '}
      <AppRoute
        exact
        path="/sales"
        layout={DashboardLayout}
        component={Sales}
      />{' '}
      <AppRoute layout={Layout} component={NotFound} />{' '}
    </Switch>{' '}
  </BrowserRouter>
);

export default App;
