import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    repeatPassword: ""
  };
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    alert(this.state.username);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <input
            type="text"
            name="username"
            required
            value={this.state.username}
            onChange={this.onChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="fullName"
            required
            value={this.state.fullName}
            onChange={this.onChange}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.onChange}
          />
        </p>
        <p>
          <input
            type="password"
            name="repeatPassword"
            required
            value={this.state.repeatPassword}
            onChange={this.onChange}
          />
        </p>
        <button>Register</button>
        <p>
          <Link to="/login">Already have an account?</Link>
        </p>
      </form>
    );
  }
}

export default Register;
