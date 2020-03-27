import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticatedAction } from "../../store/actions/authentication/authenticationActions";

function GuestRoute({ user, component: Component, ...rest }) {
  isAuthenticatedAction();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Redirect
            to={{
              pathname: `/dashboard/${user.role}`,
              state: { from: location }
            }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  user: state.authenticationReducers.user
});

export default connect(mapStateToProps, { isAuthenticatedAction })(GuestRoute);
