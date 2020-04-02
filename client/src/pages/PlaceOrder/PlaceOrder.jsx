import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import MenuTable from "../../components/UI/Menu/MenuTable";
import OrderTable from "../../components/UI/Order/OrderTable";
import { connect } from "react-redux";
import { getWeeklyReceipt } from "../../store/actions/weeklyReceipts/weeklyReceiptActions";
import { getTodaysOrder } from "../../store/actions/order/orderActions";

class PlaceOrder extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getWeeklyReceipt();
    await this.props.getTodaysOrder();
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-center">Menu</h2>
              <MenuTable />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Your order</h2>
              <OrderTable />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { getWeeklyReceipt, getTodaysOrder })(
  PlaceOrder
);
