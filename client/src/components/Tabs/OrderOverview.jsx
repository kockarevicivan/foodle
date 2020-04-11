import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTodaysOrders } from "../../store/actions/order/orderActions";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Toolbar,
  Grid,
  Button,
} from "@material-ui/core";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";

class OrderOverview extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getAllTodaysOrders();
  }

  render() {
    const { orders, classes } = this.props;
    return (
      <div>
        <Button variant="contained" className={classes.buttonStyles}>
          Send the fucking order
        </Button>
        <Grid container spacing={3}>
          {orders?.map((order) => (
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Toolbar className={classes.red}>
                  <h5 className={classes.whiteText}>{order.user.fullName}</h5>
                </Toolbar>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Title</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Quantity</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.orderItems.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducers.orders,
});

const styles = (theme) => ({
  buttonStyles: {
    marginBottom: "1.5em",
  },
  red: {
    backgroundColor: "#d50000",
  },
  whiteText: {
    color: "white",
  },
});

export default compose(
  withStyles(styles, { name: "OrderOverview" }),
  connect(mapStateToProps, { getAllTodaysOrders })
)(OrderOverview);
