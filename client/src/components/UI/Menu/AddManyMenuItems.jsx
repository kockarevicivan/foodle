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

class AddMenuItem extends Component {
  state = {
   postContent: "",
  };

  create = async (event) => {
    event.preventDefault();
    const { postContent } = this.state;
    if ( postContent) {
      alert("Please paste in the text");
      return;
    }
    const item = {
     postContent
    };

    try {
      await this.props.addManyMenuItems(item, this.props.menuId);
      this.setState({ postContent: "" });
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
        <DialogTitle id="form-dialog-title">Paste the text:</DialogTitle>
        <DialogContent style={{width: 600}}>
          <TextField
            autoFocus
            required
            multiline
            inputProps={{rows: 21}}
            autoFocus={true}
            margin="dense"
            id="title"
            label="FB text goes here"
            type="text"
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

export default connect(mapStateToProps, { addManyMenuItems })(AddMenuItem);
