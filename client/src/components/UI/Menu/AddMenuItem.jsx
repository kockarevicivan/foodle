import React, { Component } from "react";
import { connect } from "react-redux";
import { addMenuItem } from "../../../store/actions/menu/menuActions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

class AddMenuItem extends Component {
  state = {
    title: "",
    price: "",
  };

  add = async (event) => {
    event.preventDefault();
    const { title, price } = this.state;
    if (!title || !price) {
      alert("All fields are required");
      return;
    }
    const item = {
      title,
      price,
    };

    try {
      await this.props.addMenuItem(item, this.props.menuId);
      this.setState({ title: "", price: "" });
      this.props.handleClose();
    } catch (error) {
      alert("Unable to add item");
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    return (
      <Dialog
        open={this.props.dialog}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a menu item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={this.state.title}
            onChange={this.onChange}
          />

          <TextField
            required
            margin="dense"
            id="price"
            label="Price"
            type="text"
            value={this.state.price}
            onChange={this.onChange}
            fullWidth
          />
          <DialogActions>
            <Button onClick={this.props.handleClose}>Cancel</Button>
            <Button onClick={this.add} color="primary">
              Add
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  menuId: state.menuReducers.menu?._id,
});

export default connect(mapStateToProps, { addMenuItem })(AddMenuItem);
