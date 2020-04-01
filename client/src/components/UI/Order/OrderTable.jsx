import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setQuantity,
  removeOrderItem
} from "../../../store/actions/order/orderActions";

class OrderTable extends Component {
  state = {};

  onChange = ({ target }, index) => {
    if (target.value >= 0) {
      this.props.setQuantity(index, target.value);
    }
  };

  render() {
    const { orderItems } = this.props;
    return (
      <React.Fragment>
        <table className="centered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((order, index) => (
              <tr key={index}>
                <td>{order.title}</td>
                <td>
                  <input
                    type="number"
                    id="quantity"
                    value={order.quantity}
                    onChange={e => this.onChange(e, index)}
                  />
                </td>
                <td>
                  <button onClick={() => this.props.removeOrderItem(index)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Complete order</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  orderItems: state.orderReducers.orderItems
});

export default connect(mapStateToProps, { setQuantity, removeOrderItem })(
  OrderTable
);
