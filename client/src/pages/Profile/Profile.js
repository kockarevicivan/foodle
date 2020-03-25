import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/profile/profileActions";
import jwt from "jsonwebtoken";

class Profile extends Component {
  state = {
    username: "",
    fullName: "",
    token: localStorage.getItem('token'),
    userId: this.getIdFromToken(localStorage.getItem("token"))
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  getIdFromToken(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken._id;
  }

  onSubmit = async event => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      fullName: this.state.fullName
    };
    try {
      await this.props.updateUser(credentials, this.state.userId, this.state.token);
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>This is the profile page</h1>
        <form onSubmit={this.onSubmit}>
          <p>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.onChange}
            />
          </p>
          <p>
            <label htmlFor="fullName">Full name:</label>
            <br />
            <input
              type="text"
              name="fullName"
              required
              value={this.state.fullName}
              onChange={this.onChange}
            />
          </p>

          <button>Update profile</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { updateUser })(Profile);
