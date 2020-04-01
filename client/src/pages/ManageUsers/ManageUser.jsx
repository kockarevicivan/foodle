import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersAction,
  updateUser
} from "../../store/actions/users/usersActions";
import Layout from "../../components/Layout/Layout";

class ManageUsers extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getUsersAction();
  }

  demoteToUser = async (user, index) => {
    const { loggedUser } = this.props;
    if (user.promotedBy !== loggedUser._id) {
      alert("You did not promote this user to admin");
      return;
    }

    const userPayload = { role: "regular", promotedBy: null };
    await this.props.updateUser(userPayload, user._id, index);
  };

  promoteToAdmin = async (user, index) => {
    const { loggedUser } = this.props;
    const userPayload = { role: "admin", promotedBy: loggedUser._id };
    await this.props.updateUser(userPayload, user._id, index);
  };

  showDialog = async (user, index, changeRoleCallback) => {
    if (window.confirm("Are you sure about that?")) {
      await changeRoleCallback(user, index);
    }
  };

  render() {
    const { users } = this.props;
    return (
      <Layout>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <table className="centered">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Full name</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.username}</td>
                      <td>{user.fullName}</td>
                      <td>{user.role}</td>
                      <td>
                        {user.role === "admin" ? (
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              this.showDialog(user, index, this.demoteToUser)
                            }
                          >
                            {" "}
                            Demote to user
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              this.showDialog(user, index, this.promoteToAdmin)
                            }
                          >
                            {" "}
                            Promote to admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducers.users,
  loggedUser: state.authenticationReducers.user
});

export default connect(mapStateToProps, { getUsersAction, updateUser })(
  ManageUsers
);
