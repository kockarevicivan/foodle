import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem, removeItem } from "../../../store/actions/menu/menuActions";
class MenuItem extends Component {
  deleteItem(id) {
    this.props.removeItem(id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.price}</td>
        <td>{this.props.item.quantityType}</td>
        <td>
          <button
            onClick={() => {
              this.deleteItem(this.props.item._id);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, {
  editItem: (itemId, item) => editItem(itemId, item),
  removeItem: itemId => removeItem(itemId)
})(MenuItem);
