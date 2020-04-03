import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormLayout from "../components/Layout/FormLayout";

import { connect } from "react-redux";
import { registerUser } from "../store/actions/users/usersActions";

class Register extends Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    repeatPassword: ""
  };
  onChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  onSubmit = async event => {
    event.preventDefault();
    const userPayload = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password
    };

    if (userPayload.password !== this.state.repeatPassword) {
      alert("Your passwords do not match. Please try again.");
      return;
    }

    try {
      await this.props.registerUser(userPayload);
      this.props.history.push("/");
    } catch (error) {
      alert("Username taken");
    }
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
                required
                value={this.state.username}
                onChange={this.onChange}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              id="fullName"
              type="text"
              required
              value={this.state.fullName}
              onChange={this.onChange}
            />
            <label htmlFor="fullName">Full name</label>
          </div>
          <div>
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div>
            <div className="input-field col s12">
              <input
                id="repeatPassword"
                type="password"
                value={this.state.repeatPassword}
                onChange={this.onChange}
              />
              <label htmlFor="repeatPassword">Repeat password</label>
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-danger">
              Register
            </button>
            <div className="right">
              <Link to="/">
                <p className="text-secondary">Already have an account?</p>
              </Link>
            </div>
          </div>
        </form>
      </FormLayout>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { registerUser })(Register);
