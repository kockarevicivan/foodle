import React, { Component } from "react";
import Menu from "../UI/Menu/Menu";
import OrderTable from "../UI/Order";
import { connect } from "react-redux";
import { getWeeklyReceipt } from "../../store/actions/weeklyReceipts/weeklyReceiptActions";
import { getTodaysOrder } from "../../store/actions/order/orderActions";
import { Grid } from "@material-ui/core";

class PlaceOrder extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getWeeklyReceipt();
    await this.props.getTodaysOrder();
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Menu />
          </Grid>
          <Grid item xs={6}>
            <OrderTable />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getWeeklyReceipt, getTodaysOrder })(
  PlaceOrder
);
