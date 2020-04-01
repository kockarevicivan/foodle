import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenuItems } from "../../../store/actions/menuItems123/menuItemActions";
import { addItemToOrder } from "../../../store/actions/order/orderActions";

class MenuTable extends Component {
  state = {};

  componentDidMount() {
    this.props.getMenuItems();
  }

  add = menuItem => [this.props.addItemToOrder(menuItem)];

  render() {
    const { menuItems } = this.props;
    return (
      <React.Fragment>
        <table className="centered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((menuItem, index) => (
              <tr key={index}>
                <td>{menuItem.title}</td>
                <td>{menuItem.price}</td>
                <td>{menuItem.quantityType}</td>
                <td>
                  <button onClick={() => this.add(menuItem)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItemsReducers.menuItems
});

export default connect(mapStateToProps, { getMenuItems, addItemToOrder })(
  MenuTable
);
