import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authentication/authenticationActions";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  onLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.props;
    return (
      <header>
        <h2>foodle</h2>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/placeOrder">Place order</Link>
          </li>
          <li>
            <Link to="/orderHistory">Order history</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {isAuthenticated ? (
            <React.Fragment>
              <li>
                <Link to="/ordersOverview">Orders overview</Link>
              </li>
              <li>
                <Link to="/dailyMenu">Daily menu</Link>
              </li>
              <li>
                <Link to="/weeklySummary">Weekly summary</Link>
              </li>
            </React.Fragment>
          ) : null}
        </ul>
        <button onClick={this.onLogout}>Logout</button>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducers.isAuthenticated
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Sidebar));
