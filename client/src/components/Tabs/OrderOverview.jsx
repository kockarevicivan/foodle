import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTodaysOrders } from "../../store/actions/order/orderActions";

class OrderOverview extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getAllTodaysOrders();
  }

  render() {
    const { orders } = this.props;
    return (
      <div style={{ backgroundColor: "white" }}>
        {orders.map((order) => (
          <p>{order._id}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducers.orders,
});
export default connect(mapStateToProps, { getAllTodaysOrders })(OrderOverview);
