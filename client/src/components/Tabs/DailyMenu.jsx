import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem, editItem } from "../../store/actions/menu/menuActions";
import AddMenuItem from "../UI/Menu/AddMenuItem";
import Menu from "../UI/Menu/Menu";
import { Grid, Button } from "@material-ui/core";

class DailyMenu extends Component {
  state = {
    addMenuItemDialog: false,
  };

  handleOpen = () => {
    this.setState({ ...this.state, addMenuItemDialog: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, addMenuItemDialog: false });
  };

  render() {
    return (
      <div>
        <AddMenuItem
          dialog={this.state.addMenuItemDialog}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Button onClick={this.handleOpen} variant="contained">
              Add a menu item
            </Button>
            <Button variant="contained">Create from text</Button>
          </Grid>
          <Grid item xs={8}>
            <Menu admin />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(null, {
  createItem: (item) => createItem(item),
  editItem: (itemId, item) => editItem(itemId, item),
})(DailyMenu);
