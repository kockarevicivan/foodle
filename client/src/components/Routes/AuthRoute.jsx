import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ location, component: Component, ...rest }) {
  if (localStorage.getItem("token")) {
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

export default AuthRoute;
