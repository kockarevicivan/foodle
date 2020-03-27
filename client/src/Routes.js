import React, { Component } from "react";
import { connect } from "react-redux";
import GuestRoute from "./components/Routes/GuestRoute";
import AuthRoute from "./components/Routes/AuthRoute";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { Redirect, Switch, Route } from "react-router";
import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";
import DashboardLayout from "./components/Layout/DashboardLayout";

class Routes extends Component {
  componentDidMount() {
    this.props.isAuthenticatedAction();
    console.log("zpo me");
  }

  state = {};
  render() {
    let { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <Switch>
        <DashboardLayout>
          <AuthRoute path="/dashboard/admin" component={AdminDashboard} />
        </DashboardLayout>
        <Redirect to="/dashboard/admin" />
      </Switch>
    ) : (
      <Switch>
        <GuestRoute path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducers.isAuthenticated
});

export default connect(mapStateToProps, { isAuthenticatedAction })(Routes);
