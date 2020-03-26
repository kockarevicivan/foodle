import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

import AuthRoute from "./components/Routes/AuthRoute";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";

class App extends Component {
  render() {
    // svaki put kad refresuje izbrise se redux
    // pa trea da doda ulogovanog korisnika ako ima token u local storage
    // i ako je taj token validan
    this.props.isAuthenticatedAction();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <AuthRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { isAuthenticatedAction })(App);
