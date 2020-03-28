import React, { Component } from "react";

class FormLayout extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid bg-danger">
        <div className="row m-0 vh-100 align-items-center justify-content-center">
          <div className="col-lg-3">
            <h1 className="text-light text-center mb-4">foodle</h1>
            <div className="row">{this.props.children}</div>
            <h3 className="text-light text-center">
              <span>logo</span> marbleit
            </h3>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default FormLayout;
