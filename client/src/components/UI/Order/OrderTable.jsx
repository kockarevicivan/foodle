import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setQuantity,
  removeOrderItem,
  completeOrder
} from "../../../store/actions/order/orderActions";

import { Button } from "@material-ui/core";

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
            {order?.orderItems.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>
                  <input
                    type="number"
                    id="quantity"
                    value={item.quantity}
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
        <Button variant="contained" onClick={this.onClick}>
          Complete order
        </Button>
      </React.Fragment>
    );
  }

  onClick = async () => {
    await this.props.completeOrder(this.props.order);
  };
}

const mapStateToProps = state => ({
  order: state.orderReducers.order
});

export default connect(mapStateToProps, {
  setQuantity,
  removeOrderItem,
  completeOrder
})(OrderTable);
