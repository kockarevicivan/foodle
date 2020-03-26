import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Layout from "../../components/Layout/DashboardLayout";
import UserDashboard from "./UserDashboard/UserDashboard";
import { connect } from "react-redux";
import { isAuthenticatedAction } from "../../store/actions/authentication/authenticationActions";
import { Redirect } from "react-router";

class Dashboard extends Component {
  render() {
    if (this.props.user && this.props.user.role === "admin") {
      return (
        <Layout>
          <AdminDashboard />
        </Layout>
      );
    } else if (this.props.user && this.props.role === "regular") {
      return (
        <Layout>
          <UserDashboard />
        </Layout>
      );
    }

    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducers.user
});

export default connect(mapStateToProps, { isAuthenticatedAction })(Dashboard);
