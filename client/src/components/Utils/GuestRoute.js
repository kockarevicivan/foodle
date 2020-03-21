import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function GuestRoute({ user, component, ...rest }) {
  if (user) {
    return <Redirect to={`/dashboard/${user.role}`} />;
  }

  return <Route {...rest} component={component}></Route>;
}

const mapStateToProps = state => ({
  user: state.authenticationReducers.user
});

export default connect(mapStateToProps, {})(GuestRoute);
