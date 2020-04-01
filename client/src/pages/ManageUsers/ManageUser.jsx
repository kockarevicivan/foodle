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

  changeRole = async (user, index) => {
    const userPayload = { role: user.role === "admin" ? "regular" : "admin" };
    await this.props.updateUser(userPayload, user._id, index);
    alert("promnuli ste ga");
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
                        <button
                          onClick={() => this.changeRole(user, index)}
                          className="btn btn-success"
                        >
                          {user.role !== "admin"
                            ? "Promote to admin"
                            : "Demote to user"}
                        </button>
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
  users: state.usersReducers.users
});

export default connect(mapStateToProps, { getUsersAction, updateUser })(
  ManageUsers
);
