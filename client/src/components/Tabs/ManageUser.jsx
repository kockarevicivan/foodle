import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getUsersAction,
  updateUser,
} from "../../store/actions/users/usersActions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

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
      <div>
        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Users
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Full name</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.username}</TableCell>
                  <TableCell align="center">{row.fullName}</TableCell>
                  <TableCell align="center">{row.role}</TableCell>
                  <TableCell align="center">
                    {row.role !== "admin" ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          this.showDialog(row, index, this.promoteToAdmin)
                        }
                      >
                        Promote{" "}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          this.showDialog(row, index, this.demoteToUser)
                        }
                      >
                        Demote{" "}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersReducers.users,
  loggedUser: state.authenticationReducers.user,
});

export default compose(
  withStyles(styles, { name: "ManageUsers" }),
  connect(mapStateToProps, { getUsersAction, updateUser })
)(ManageUsers);
