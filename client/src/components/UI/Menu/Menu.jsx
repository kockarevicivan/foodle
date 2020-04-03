import React, { Component } from "react";
import { connect } from "react-redux";
import AdminMenuItem from "./AdminMenuItem";
import RegularMenuItem from "./RegularMenuItem";

import { getAllForDay } from "../../../store/actions/menu/menuActions";

class Menu extends Component {
  state = {};

  componentDidMount() {
    this.props.getAllForDay();
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
            {this.props.items.map(item =>
              this.props.admin ? (
                <AdminMenuItem key={item._id} item={item} />
              ) : (
                <RegularMenuItem key={item._id} item={item} />
              )
            )}
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
  getAllForDay: items => getAllForDay(items)
})(Menu);
