import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Layout from "../../components/Layout/DashboardLayout";
import UserDashboard from "./UserDashboard/UserDashboard";
import { connect } from "react-redux";

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

    // mora da vrati null jer je react najretardiraniji frejmvork na svetu
    return null;
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducers.user
});

export default connect(mapStateToProps, {})(Dashboard);
