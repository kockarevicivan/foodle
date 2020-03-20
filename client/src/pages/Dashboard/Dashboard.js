import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import UserDashboard from "./UserDashboard/UserDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Layout from "../../components/Shared/Layout";
import AuthRoute from "../../components/Utils/AuthRoute";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            <AuthRoute path="/dashboard/regular" component={UserDashboard} />
            <AuthRoute path="/dashboard/admin" component={AdminDashboard} />
            <Redirect to="/login" />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Dashboard;
