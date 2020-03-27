import React, { Component } from "react";
import Toolbar from "../UI/Toolbar/Toolbar";
class MainLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default MainLayout;
