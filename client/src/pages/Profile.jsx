import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateProfile,
  updatePassword,
} from "../store/actions/users/usersActions";
import Layout from "../components/Layout/Layout";
//import ProfileForm from "../../components/ProfileFormComponent/ProfileFormComponent";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullName: "",
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    };
  }
  // componenDidMount i WillUpdate su tu kako bi se prefill forma sa podacima usera
  //ovo mora ovako barem za sad posto je react retardiran :)
  componentDidMount() {
    this.setState({
      username: this.props.user.user?.username || "",
      fullName: this.props.user.user?.fullName || "",
    });
  }

  componentWillUpdate(prevProps, nextProps) {
    if (prevProps.user.user !== this.props.user.user) {
      this.setState({
        username: prevProps.user.user?.username || "",
        fullName: prevProps.user.user?.fullName || "",
      });
    }
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = async (event) => {
    console.log(1);

    event.preventDefault();
    const userPayload = {
      username: this.state.username,
      fullName: this.state.fullName,
    };
    try {
      await this.props.updateUser(userPayload, this.props.user.user._id);
    } catch (error) {
      console.log(error.message);
    }
  };
  onSubmitPassword = async (event) => {
    event.preventDefault();
    console.log("entered submit");

    const payLoad = {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
      newPassword2: this.state.newPassword2,
    };
    if (this.state.newPassword === this.state.newPassword2) {
      try {
        await this.props.updatePassword(payLoad, this.props.user.user._id);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("Your new passwords do not match. Please try again.");
    }
  };

  render() {
    return (
      <div>
        <h1>This is the profile page</h1>
        <div className="container d-flex flex-row  col-8">
          <div className="col-4">
            <form onSubmit={this.onSubmit}>
              <p>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  required
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

              <button type="submit">Update profile</button>
            </form>
          </div>
          <div className="col-4">
            <form onSubmit={this.onSubmitPassword}>
              <p>
                <label htmlFor="oldPassword">Old password:</label>
                <br />
                <input
                  type="password"
                  name="oldPassword"
                  required
                  onChange={this.onChange}
                />
              </p>
              <p>
                <label htmlFor="newPassword">New password:</label>
                <br />
                <input
                  type="password"
                  name="newPassword"
                  required
                  onChange={this.onChange}
                />
                <label htmlFor="newPassword2">Repeat new password:</label>
                <br />
                <input
                  type="password"
                  name="newPassword2"
                  required
                  onChange={this.onChange}
                />
              </p>

              <button type="submit">Update password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authenticationReducers,
});

export default connect(mapStateToProps, {
  updateProfile: (payLoad, _id) => updateProfile(payLoad, _id),
  updatePassword: (payLoad, _id) => updatePassword(payLoad, _id),
})(Profile);
