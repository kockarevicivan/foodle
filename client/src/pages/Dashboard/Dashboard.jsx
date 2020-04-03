import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    if (this.props.user && this.props.user.role === "admin") {
      return <AdminDashboard />;
    } else if (this.props.user && this.props.user.role === "regular") {
      return <UserDashboard />;
    }

    // mora da vrati null jer je react najretardiraniji frejmvork na svetu
    return null;
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducers.user
});

export default connect(mapStateToProps, {})(Dashboard);
