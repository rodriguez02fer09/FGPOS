import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import DashboardLayout from '../components/DashboardLayout';
// import RegisterLayout from "../components/RegisterLayout";
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
      <Route exact path='/' component={isLogged ? Sales : Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <AppRoute
        exact
        path='/sales'
        layout={DashboardLayout}
        component={Sales}
      />
      <AppRoute
        exact
        path='/inventory'
        layout={DashboardLayout}
        component={Inventory}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
