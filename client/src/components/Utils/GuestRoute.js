import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

class GuestRoute extends Component {
  render() {
    const { component, ...rest } = this.props;

    let kurac = false;
    if (kurac) {
      return <Redirect to="/" />;
    }
    return <Route {...rest} component={component}></Route>;
  }
}

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default GuestRoute;
