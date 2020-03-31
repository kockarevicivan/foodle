import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../store/actions/users/usersActions";
import Layout from "../../components/Layout/Layout";

class ManageUsers extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getUsersAction();
  }

  render() {
    const { users } = this.props;
    return (
      <Layout>
        <div>
          <h1>ManageUsers</h1>
          <h2>Users:</h2>
          {users.map(user => (
            <p key={user.username}>{user.username}</p>
          ))}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducers.users
});

export default connect(mapStateToProps, { getUsersAction })(ManageUsers);
