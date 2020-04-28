import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { getWeeklyReceiptsForDate } from "../../store/actions/weeklyReceipts/weeklyReceiptActions";
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

    try {
      await this.props.getWeeklyReceiptsForDate(
        this.state.year,
        this.state.week
      );
      console.log(this.props.summaries);
    } catch (error) {
      console.log(error.message);
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { summaries } = this.props;
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
                InputProps={{ min: "1" }}
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
              {summaries?.map((item) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell align="center">{item.user}</TableCell>
                    <TableCell align="center">{item.totalPrice}</TableCell>
                    <TableCell align="center">
                      {item.paid ? "paid" : "unpaid"}
                    </TableCell>
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
  summaries: state.weeklyReceiptReducers.weeklySummaryReceipts,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getWeeklyReceiptsForDate })
)(OrderHistory);

