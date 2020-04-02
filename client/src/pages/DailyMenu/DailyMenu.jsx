import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../../components/MenuComponents/MenuItem/MenuItemComponent"
import {
  getAllForDay,
  createItem,
  editItem,
  removeItem
} from "../../store/actions/menu/menuActions";
import Layout from "../../components/Layout/Layout";
class DailyMenu extends Component {
  state = {
    title: "",
    price: "",
    quantityType: "100gr"
  };

  
  componentDidMount() {
    this.props.getAllForDay(new Date().toISOString());
  }

  onSubmit = async event => {
    event.preventDefault();
    const itemInfo = {
      title: this.state.title.trim(),
      price: this.state.price,
      quantityType: this.state.quantityType
    };
    try {
      await this.props.createItem(itemInfo);
    } catch (error) {
      alert("Unable to add item");
    }
  };

  onChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    return (
      <Layout>
        <div className="container col-10">
          <h1 className="text-center">DailyMenu</h1>
          <div className="d-flex justify-content-md-between justify-content-sm-center flex-md-row flex-sm-column">
            <div className="col-6 p-0 d-flex justify-content-sm-center justify-content-md-start">
              <button className="btn">Generisi meni iz teksta</button>
            </div>
            <div className="col-6 p-0 d-flex justify-content-sm-center justify-content-md-end">
              <button className="btn">Generisi meni iz api</button>
            </div>
          </div>

          <div className="container">
            <div className="row pt-5">
              <div className="col-8">
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
              <div className="col-4">
                <form onSubmit={this.onSubmit}>
                  <h4 className="text-center pt-4 pb-4">Novi item</h4>
                  <div className="d-flex flex-column">
                    <input
                      type="text"
                      placeholder="Naziv hrane"
                      required
                      value={this.state.title}
                      onChange={this.onChange}
                      className="form-control"
                      id="title"
                    />

                    <input
                      type="number"
                      placeholder="Cena"
                      required
                      value={this.state.price}
                      onChange={this.onChange}
                      className="form-control"
                      id="price"
                    />

                    <select
                      required
                      onChange={this.onChange}
                      value={this.state.quantityType}
                      className="d-block"
                      id="quantityType"
                    >
                      <option value="100gr">100gr</option>
                      <option value="1kom">1kom</option>
                    </select>
                    <button type="submit" className="btn">
                      Dodaj
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  items: state.menuReducers.items
});

export default connect(mapStateToProps, {
  getAllForDay: items => getAllForDay(items),
  createItem: item => createItem(item),
  editItem: (itemId, item) => editItem(itemId, item),
  removeItem: itemId => removeItem(itemId)
})(DailyMenu);
