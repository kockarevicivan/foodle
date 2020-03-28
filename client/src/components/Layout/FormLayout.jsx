import React, { Component } from "react";

class FormLayout extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid bg-danger">
        <div className="row m-0 vh-100 align-items-center justify-content-center">
          <div className="col-lg-4">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default FormLayout;
