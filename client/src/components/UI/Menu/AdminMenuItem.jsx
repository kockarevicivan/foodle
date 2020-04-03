import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem, removeItem } from "../../../store/actions/menu/menuActions";

class MenuItem extends Component {
  deleteItem() {
    const { item } = this.props;
    this.props.removeItem(item._id);
  }

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.quantityType}</td>
        <td>
          <button>E</button>
          <button
            onClick={() => {
              this.deleteItem();
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
