import React, { Component } from "react";
import {connect} from "react-redux";
import {compose} from "redux"
import { updatePassword } from "../../store/actions/users/usersActions";

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import styles from "./styles";

class ProfileSecurityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    };
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  onSubmitPassword = async (event) => {
    event.preventDefault();

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
    const { classes } = this.props;
    return (
        <Paper>

      <form onSubmit={this.onSubmitPassword} noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
          className={classes.formContainer}
          >
          <h2>Security</h2>
          <Grid item>
            <TextField
              required
              type="password"
              value={this.state.oldPassword}
              name="oldPassword"
              label="Old password"
              className={classes.inputField}
              onChange={this.onChange}
              />
          </Grid>

          <Grid item>
            <TextField
              required
              type="password"
              value={this.state.newPassword}
              name="newPassword"
              label="New password"
              className={classes.inputField}
              onChange={this.onChange}
              />
          </Grid>
          <Grid item>
            <TextField
              required
              type="password"
              value={this.state.newPassword2}
              name="newPassword2"
              label="Repeat new password"
              className={classes.inputField}
              onChange={this.onChange}
              />
          </Grid>
          <Grid item>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
              </Paper>
    );
  }
}
export default compose(
  withStyles(styles),
  connect(null, {
    updatePassword,
  })
)(ProfileSecurityForm);
