import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AuthRoute({ isLogged, component, ...rest }) {
  if (isLogged) {
    return <Route {...rest} component={component}></Route>;
  }

  return <Redirect to="/"></Redirect>;
}

const mapStateToProps = state => {
  console.log(state.authenticationReducers);
  return {
    isLogged: state.authenticationReducers.user ? true : false
  };
};
export default connect(mapStateToProps, {})(AuthRoute);
