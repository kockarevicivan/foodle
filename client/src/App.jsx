import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./components/Routes/AuthRoute";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import Administration from "./pages/Administration";
import Profile from "./pages/Profile";
import Ordering from "./pages/Ordering";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./index.css";
import { connect } from "react-redux";
import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";

class App extends Component {
  componentDidMount() {
    this.props.isAuthenticatedAction();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Layout>
            <AuthRoute path="/dashboard" component={Dashboard} />
            <AuthRoute path="/administration" component={Administration} />
            <AuthRoute path="/profile" component={Profile} />
            <AuthRoute path="/orders" component={Ordering} />
          </Layout>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.menuReducers.items,
});

export default connect(mapStateToProps, {
  isAuthenticatedAction,
})(App);
