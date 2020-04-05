import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setQuantity,
  removeOrderItem,
  completeOrder,
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
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">
                    <TextField
                      id="quantity"
                      value={row.quantity}
                      onChange={(e) => this.onChange(e, index)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => this.props.removeOrderItem(index)}>
                      <RemoveIcon />
                    </Button>
                  </TableCell>
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
    completeOrder,
  })
)(OrderTable);
