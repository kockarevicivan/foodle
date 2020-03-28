import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser } from "../../store/actions/authentication/authenticationActions";
import FormLayout from "../../components/Layout/FormLayout";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const credentials = {
      username: this.state.username.trim(),
      password: this.state.password.trim()
    };
    try {
      await this.props.authenticateUser(credentials);
      this.props.history.push("/dashboard");
    } catch (error) {
      alert("Wrong username or password!");
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    return (
      <FormLayout>
        <form
          onSubmit={this.onSubmit}
          className="col s12 bg-light p-3 rounded-lg"
        >
          <div>
            <div className="input-field col s12">
              <input
                id="username"
                type="text"
                value={this.state.username}
                required
                onChange={this.onChange}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div>
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                required
                value={this.state.password}
                onChange={this.onChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>
            <div className="right">
              <Link to="/register">
                <p className="text-secondary">Create an account</p>
              </Link>
            </div>
          </div>
        </form>
      </FormLayout>
    );
  }
}

export default connect(null, { authenticateUser })(Login);
