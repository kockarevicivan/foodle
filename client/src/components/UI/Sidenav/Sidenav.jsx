import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authentication/authenticationActions";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  onLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { isAdmin } = this.props;
    return (
      <React.Fragment>
        <ul>
          <li>
            <h2 className="text-danger text-center">foodle</h2>
          </li>
          <li>
            <div className="user-view"></div>
          </li>
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
          {isAdmin ? (
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
              <li>
                <Link to="/manageUsers"></Link>
              </li>
            </React.Fragment>
          ) : null}
          <li>
            <Link onClick={this.onLogout} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.authenticationReducers.user.role === "admin"
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Sidebar));
