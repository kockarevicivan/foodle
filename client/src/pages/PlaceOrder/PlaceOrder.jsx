import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
<<<<<<< HEAD
import MenuTable from "../../components/MenuComponents/MenuTableComponent/MenuTableComponent"
=======
import MenuTable from "../../components/MenuTableComponent/MenuTableComponent"
>>>>>>> 7d4da286c217a15685423b0f75f7879bd8fa144b
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
