import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/registration/registrationActions";
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

  onSubmit = async event => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password
    }
    if(credentials.password == this.state.repeatPassword) {
      console.log(1);
      
      try {
        await this.props.registerUser(credentials);
        this.props.history.push(`/login`);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log('nope');
      
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <label htmlFor="username">Username:</label><br/>
          <input
            type="text"
            name="username"
            required
            value={this.state.username}
            onChange={this.onChange}
          />
        </p>
        <p>
        <label htmlFor="fullName">Full name:</label><br/>
          <input
            type="text"
            name="fullName"
            required
            value={this.state.fullName}
            onChange={this.onChange}
          />
        </p>
        <p>
        <label htmlFor="password">Password:</label><br/>
          <input
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.onChange}
          />
        </p>
        <p>
        <label htmlFor="repeatPassword">Repeat password:</label><br/>
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


const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { registerUser })(Register);