import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ProfilePage from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

import AuthRoute from "./components/Routes/AuthRoute";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";

class App extends Component {
  componentDidMount() {
    this.props.isAuthenticatedAction();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <AuthRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { isAuthenticatedAction })(App);
