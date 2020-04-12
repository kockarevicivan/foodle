import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToOrder } from "../../../store/actions/order/orderActions";
import { TableCell, TableRow, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class RegularMenuItem extends Component {
  state = {};
  add = (menuItem) => [this.props.addItemToOrder(menuItem)];

  render() {
    const { item, orderStatus } = this.props;
    return (
      <TableRow>
        <TableCell align="center">{item.title}</TableCell>
        <TableCell align="center">{item.price}</TableCell>
        {orderStatus === 0 ? (
          <TableCell align="center">
            <Button
              onClick={() => {
                this.add(item);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </TableCell>
        ) : null}
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => ({
  menuItems: state.menuReducers.items,
  orderStatus: state.orderReducers.order?.status,
});

export default connect(mapStateToProps, { addItemToOrder })(RegularMenuItem);
