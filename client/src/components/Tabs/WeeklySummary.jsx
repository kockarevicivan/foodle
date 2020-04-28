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
class WeeklySummary extends Component {
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
    } catch (error) {
      console.log(error.message);
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { summaries } = this.props;
    const { names } = this.props;
    return (
      <div>
        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Weekly Summary
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
              {summaries?.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell align="center">{names[index]}</TableCell>
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
  names: state.weeklyReceiptReducers.names,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getWeeklyReceiptsForDate })
)(WeeklySummary);
