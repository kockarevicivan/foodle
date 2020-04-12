import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setQuantity,
  removeOrderItem,
  updateOrder,
} from "../../store/actions/order/orderActions";
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
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "../Tabs/styles";
import RemoveIcon from "@material-ui/icons/Remove";

class OrderTable extends Component {
  state = {};

  onChange = ({ target }, index) => {
    if (target.value >= 0) {
      this.props.setQuantity(index, target.value);
    }
  };

  onCompleteOrder = async () => {
    const { order } = this.props;
    for (let item of order.orderItems) {
      if (item.quantity <= 0) {
        alert("You need to enter the quantity");
        return;
      }
    }

    await this.props.updateOrder(order);
    alert(
      "Your order has been sent, you can still change it until the admin doesn't send it."
    );
  };

  render() {
    const { order } = this.props;
    return (
      <div>
        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Your order
            {order?.orderItems.length !== 0 ? (
              <Button
                variant="contained"
                color=""
                onClick={this.onCompleteOrder}
                disabled={order?.status !== 0}
              >
                Complete order
              </Button>
            ) : null}
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <strong>Title</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Quantity</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order?.orderItems.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {row.title + " " + row.price}
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      name="quantity"
                      value={row.quantity}
                      onChange={(e) => this.onChange(e, index)}
                    />
                  </TableCell>
                  {order?.status === 0 ? (
                    <TableCell align="center">
                      <Button onClick={() => this.props.removeOrderItem(index)}>
                        <RemoveIcon />
                      </Button>
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}
              {order?.orderItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    You haven't added anything to your order
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  onClick = async () => {
    await this.props.completeOrder(this.props.order);
  };
}

const mapStateToProps = (state) => ({
  order: state.orderReducers.order,
});

export default compose(
  withStyles(styles, { name: "OrderTable" }),
  connect(mapStateToProps, {
    setQuantity,
    removeOrderItem,
    updateOrder,
  })
)(OrderTable);
