import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser } from "../../store/actions/authentication/authenticationActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    try {
      await this.props.authenticateUser(credentials);
      this.props.history.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div>
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
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.onChange}
            />
          </p>
          <button>Login</button>
        </form>
        <Link to="/register">Create an account</Link>
      </div>
    );
  }
}

export default connect(null, { authenticateUser })(Login);
