import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/authentication/authenticationActions";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./styles.css";

class Sidebar extends Component {
  state = {};
  onLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { isAdmin } = this.props;
    return (
      <React.Fragment>
        <nav className="sidebar h-100">
          <div className="sidebar-header bg-danger p-2">
            <h2 className="text-light text-center space">foodle</h2>
          </div>

          <ul className="h-100 bg-secondary">
            <li className="w-100">
              <Link to="/placeOrder">Place order</Link>
            </li>{" "}
            <br />
            <li className="w-100">
              <Link to="/orderHistory">Order history</Link>
            </li>{" "}
            <br />
            <li className="w-100">
              <Link to="/profile">Profile</Link>
            </li>{" "}
            <br />
            {isAdmin ? (
              <React.Fragment>
                <li className="w-100">
                  <Link to="/ordersOverview">Orders overview</Link>
                </li>{" "}
                <br />
                <li className="w-100">
                  <Link to="/dailyMenu">Daily menu</Link>
                </li>{" "}
                <br />
                <li className="w-100">
                  <Link to="/weeklySummary">Weekly summary</Link>
                </li>{" "}
                <br />
                <li className="w-100">
                  <Link to="/manageUsers">Manage users</Link>
                </li>{" "}
                <br />
              </React.Fragment>
            ) : null}
            <li className="w-100">
              <Link onClick={this.onLogout} to="/">
                Logout
              </Link>
            </li>{" "}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.authenticationReducers.user?.role === "admin"
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Sidebar));
