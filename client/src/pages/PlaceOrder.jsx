import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Menu from "../components/UI/Menu/Menu";
import OrderTable from "../components/UI/Order";
import { connect } from "react-redux";
import { getWeeklyReceipt } from "../store/actions/weeklyReceipts/weeklyReceiptActions";
import { getTodaysOrder } from "../store/actions/order/orderActions";

class PlaceOrder extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getWeeklyReceipt();
    await this.props.getTodaysOrder();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-center">Menu</h2>
              <Menu />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Your order</h2>
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getWeeklyReceipt, getTodaysOrder })(
  PlaceOrder
);
