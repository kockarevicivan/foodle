import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authentication/authenticationActions";
import { withRouter } from "react-router";

class Sidebar extends Component {
  state = {};
  onLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <p>this is a fukcing sidebar</p>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { logoutUser })(Sidebar));
