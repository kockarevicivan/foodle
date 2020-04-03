import React, { Component } from "react";
import Layout from "../components/Layout/Layout";

class OrderOverview extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <h1>OrderOverview</h1>
        <p>
          Ovde ce admin moci da izabere dan i da vidi narudzbine za taj dan.
          Moci ce da posalje narudzbinu. I moci ce da unosi kolko para treba
          svaki korisnik da da.
        </p>
      </Layout>
    );
  }
}

export default OrderOverview;
