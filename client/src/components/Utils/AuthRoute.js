import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AuthRoute({ isLogged, component, ...rest }) {
  if (isLogged) {
    return <Route {...rest} component={component}></Route>;
  }

  return <Redirect to="/"></Redirect>;
}

const mapStateToProps = state => ({
  isLogged: state.authenticationReducers.isLogged
});

export default connect(mapStateToProps, {})(AuthRoute);
