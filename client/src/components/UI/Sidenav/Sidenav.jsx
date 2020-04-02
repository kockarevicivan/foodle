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
            <li>
              <Link to="/placeOrder">Place order</Link>
            </li>{" "}
            <br />
            <li>
              <Link to="/orderHistory">Order history</Link>
            </li>{" "}
            <br />
            <li>
              <Link to="/profile">Profile</Link>
            </li>{" "}
            <br />
            {isAdmin ? (
              <React.Fragment>
                <li>
                  <Link to="/ordersOverview">Orders overview</Link>
                </li>{" "}
                <br />
                <li>
                  <Link to="/dailyMenu">Daily menu</Link>
                </li>{" "}
                <br />
                <li>
                  <Link to="/weeklySummary">Weekly summary</Link>
                </li>{" "}
                <li>
                  <Link to="/manageUsers"></Link>
                </li>{" "}
                <br />
              </React.Fragment>
            ) : null}
            <li>
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
