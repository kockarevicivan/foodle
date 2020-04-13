import React, { Component } from "react";
import AddMenuItem from "../UI/Menu/AddMenuItem";
import AddManyMenuItems from "../UI/Menu/AddManyMenuItems";
import Menu from "../UI/Menu/Menu";
import { Grid, Button } from "@material-ui/core";

class DailyMenu extends Component {
  state = {
    addMenuItemDialog: false,
    createFromText: false,
  };

  handleOpen = () => {
    this.setState({ ...this.state, addMenuItemDialog: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, addMenuItemDialog: false });
  };
  handleOpenCreate = () => {
    this.setState({ ...this.state, createFromText: true });
  };

  handleCloseCreate = () => {
    this.setState({ ...this.state, createFromText: false });
  };

  render() {
    return (
      <div>
        <AddMenuItem
          dialog={this.state.addMenuItemDialog}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <AddManyMenuItems
          dialog={this.state.createFromText}
          handleOpen={this.handleOpenCreate}
          handleClose={this.handleCloseCreate}
        />
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Button onClick={this.handleOpen} variant="contained">
              Add a menu item
            </Button>
            <Button onClick={this.handleOpenCreate} variant="contained">
              Create from text
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Menu admin />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DailyMenu;
