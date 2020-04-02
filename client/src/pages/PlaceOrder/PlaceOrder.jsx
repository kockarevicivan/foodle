import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import MenuTable from "../../components/MenuComponents/MenuTableComponent/MenuTableComponent"
class PlaceOrder extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <h1>PlaceOrder</h1>; ovde idu one dve tabele, jedna gde bira menu item
        druga gde unosi kolko oce
        <MenuTable></MenuTable>
      </Layout>
    );
  }
}

export default PlaceOrder;
