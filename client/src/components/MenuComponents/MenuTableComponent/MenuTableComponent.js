import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../../MenuComponents/MenuItem/MenuItemComponent"
import {
  getAllForDay,
  createItem,
  editItem,
  removeItem
} from "../../../store/actions/menu/menuActions";

class MenuTable extends Component {
  state = {};

  componentDidMount() {
    this.props.getAllForDay(new Date().toISOString());
  }

  render() {
    return (
      <div className="container">
        <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Naziv</th>
                      <th scope="col">Cena</th>
                      <th scope="col">100gr/1kom</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.items.map(item => (
                      <MenuItem key={item._id} item={item}></MenuItem>
                    ))}
                  </tbody>
                </table>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.menuReducers.items
});

export default connect(mapStateToProps, {
  getAllForDay: items => getAllForDay(items),
  editItem: (itemId, item) => editItem(itemId, item)
})(MenuTable);
