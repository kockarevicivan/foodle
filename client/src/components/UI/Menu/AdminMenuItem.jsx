import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem, removeItem } from "../../../store/actions/menu/menuActions";
import { TableCell, TableRow, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class MenuItem extends Component {
  deleteItem() {
    const { menuId, index } = this.props;
    this.props.removeItem(menuId, index);
  }

  render() {
    const { item } = this.props;
    return (
      <TableRow>
        <TableCell align="center">{item.title}</TableCell>
        <TableCell align="center">{item.price}</TableCell>
        <TableCell align="center">
          <Button
            onClick={() => {
              this.deleteItem();
            }}
          >
            <DeleteIcon fontSize="small" color="secondary" />
          </Button>
          <Button>
            <EditIcon fontSize="small" style={{ color: "green" }} />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => ({
  menuId: state.menuReducers.menu?._id,
});

export default connect(mapStateToProps, { editItem, removeItem })(MenuItem);
