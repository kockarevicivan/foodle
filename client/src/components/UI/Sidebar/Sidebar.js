import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authentication/authenticationActions";

class Sidebar extends Component {
  state = {};
  onLogout = () => {
    this.props.logoutUser();
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

export default connect(null, { logoutUser })(Sidebar);
