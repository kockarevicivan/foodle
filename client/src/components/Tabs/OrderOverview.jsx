import React, { Component } from "react";
import Layout from "../Layout/Layout";

class OrderOverview extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>OrderOverview</h1>
        <p>
          Ovde ce admin moci da izabere dan i da vidi narudzbine za taj dan.
          Moci ce da posalje narudzbinu. I moci ce da unosi kolko para treba
          svaki korisnik da da.
        </p>
      </div>
    );
  }
}

export default OrderOverview;
