import React, { Component } from "react";
import { connect } from "react-redux";
import { addManyMenuItems } from "../../../store/actions/menu/menuActions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

class AddManyMenuItems extends Component {
  state = {
    postText: null,
  };

  create = async (event) => {
    event.preventDefault();
    const { postText } = this.state;
    if (postText === null) {
      alert("Please paste in the text");
      return;
    }
    const itemArray = await this.createItemArray(postText);
    console.log(itemArray);

    try {
      await this.props.addManyMenuItems(itemArray, this.props.menuId);
      this.setState({ postContent: "" });
      this.props.handleClose();
    } catch (error) {
      alert("Unable to add item");
    }
  };

  createItemArray(formData) {
    const lineArray = formData.split(/\r?\n/);
    let finishedArray = [];
    lineArray.forEach((item) => {
      
      const splitItem = item.trim().split(" ");
      const title = splitItem.slice(0, splitItem.length - 1).join(" ");
      const price = splitItem[splitItem.length - 1];
      finishedArray.push({ title, price });
    });

    return finishedArray;
  }

  onChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
    console.log(target.value);
  };

  render() {
    return (
      <Dialog
        open={this.props.dialog}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Paste the text:</DialogTitle>
        <DialogContent style={{ width: 600 }}>
          <TextField
            autoFocus
            required
            multiline
            inputProps={{ rows: 21 }}
            autoFocus={true}
            margin="dense"
            label="FB text goes here"
            type="text"
            id="postText"
            fullWidth={true}
            value={this.state.postText}
            onChange={this.onChange}
          />
          <DialogActions>
            <Button onClick={this.props.handleCloseCreate}>Cancel</Button>
            <Button onClick={this.create} color="primary">
              Create
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

export default connect(mapStateToProps, { addManyMenuItems })(AddManyMenuItems);
