import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AuthRoute({
  isAuthenticated,
  location,
  component: Component,
  ...rest
}) {
  if (isAuthenticated) {
    return <Route {...rest} component={Component} />;
  }
  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
    />
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducers.isAuthenticated
});

export default connect(mapStateToProps, {})(AuthRoute);
