import React, { Component } from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import { updateProfile } from "../../store/actions/users/usersActions";

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import styles from "./styles";


class ProfileCredentialsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullName: "",
    };
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  // componenDidMount i WillUpdate su tu kako bi se prefill forma sa podacima usera
  //ovo mora ovako barem za sad posto je react retardiran :)
  async componentDidMount() {
    await this.setState({
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

  onSubmit = async (event) => {
    event.preventDefault();
    const userPayload = {
      username: this.state.username,
      fullName: this.state.fullName,
    };
    try {
      await this.props.updateProfile(userPayload, this.props.user.user._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { classes } = this.props;
    return (
        <Paper>

      <form onSubmit={this.onSubmit} noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
          className={classes.formContainer}
          >
          <h2>Credentials</h2>
          <Grid item>
            <TextField
              required
              value={this.state.username}
              name="username"
              label="Username"
              className={classes.inputField}
              onChange={this.onChange}
              />
          </Grid>

          <Grid item>
            <TextField
              required
              value={this.state.fullName}
              name="fullName"
              label="Full name"
              inputProps={{classes, disableUnderline: true}}
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

const mapStateToProps = (state) => ({
    user: state.authenticationReducers,
  });
export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
      updateProfile,
    })
)(ProfileCredentialsForm);
