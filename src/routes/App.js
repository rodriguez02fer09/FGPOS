import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginContainer from "../containers/Login";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
