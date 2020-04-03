import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToOrder } from "../../../store/actions/order/orderActions";
class RegularMenuItem extends Component {
  state = {};
  add = menuItem => [this.props.addItemToOrder(menuItem)];

  render() {
    const { item: menuItem } = this.props;
    return (
      <tr>
        <td>{menuItem.title}</td>
        <td>{menuItem.price}</td>
        <td>{menuItem.quantityType}</td>
        <td>
          <button onClick={() => this.add(menuItem)}>+</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuReducers.items
});

export default connect(mapStateToProps, { addItemToOrder })(RegularMenuItem);
