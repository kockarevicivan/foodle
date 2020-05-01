import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { getWeeklyReceiptAndOrdersForUser } from "../../store/actions/weeklyReceipts/weeklyReceiptActions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
class OrderHistory extends Component {
  state = {
    week: "1",
    year: "2020",
  };
  // ovde ce admin moci da izabere nedelju i da vidi weekly receiptove za
  // svakog korisnika u toj nedelji i da unese da li mu je platio

  getWeeklySummaries = async (event) => {
    event.preventDefault();
    console.log(this.props.user._id);

    try {
      await this.props.getWeeklyReceiptAndOrdersForUser(
        this.props.user._id,
        this.state.year,
        this.state.week
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { userOrders } = this.props;
    const { userReceipt } = this.props;
    console.log(userOrders);

    return (
      <div>
        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Order History
          </Typography>
          <form onSubmit={this.getWeeklySummaries} autoComplete="off">
            <Grid container alignItems="flex-end">
              <Grid item>
                <TextField
                  label="Year"
                  name="year"
                  type="number"
                  variant="standard"
                  onChange={this.onChange}
                  classes={{ root: this.props.classes.white }}
                  inputProps={{ min: "2020" }}
                  InputProps={{ defaultValue: 2020, disableUnderline: true }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Week"
                  name="week"
                  type="number"
                  variant="standard"
                  onChange={this.onChange}
                  inputProps={{ min: "1" }}
                  InputProps={{ defaultValue: 1, disableUnderline: true }}
                ></TextField>
              </Grid>
              <Grid item alignContent="center">
                <Button type="submit">Search</Button>
              </Grid>
            </Grid>
          </form>
        </Toolbar>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <strong>User</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Bill</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Bill status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userReceipt ? (
                <TableRow>
                  <TableCell align="center">
                    {this.props.user.fullName}
                  </TableCell>
                  <TableCell align="center">{userReceipt.totalPrice}</TableCell>
                  <TableCell align="center">
                    {userReceipt.paid ? "paid" : "unpaid"}
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell align="center">
                    There is not receipt for this week
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Orders
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <strong>Order</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Bill</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Order status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrders?.map((item) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell align="center">
                      <ul>
                        {item.orderItems.map((order, index) => {
                          return <li key={index}>{order.title}</li>;
                        })}
                      </ul>
                    </TableCell>
                    <TableCell align="center">{item.totalPrice}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authenticationReducers.user,
  userReceipt: state.weeklyReceiptReducers?.userReceipt,
  userOrders: state.weeklyReceiptReducers.orders,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getWeeklyReceiptAndOrdersForUser })
)(OrderHistory);
