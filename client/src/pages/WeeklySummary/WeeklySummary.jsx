import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";

class WeeklySummary extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <h1>WeeklySummary</h1>
        <p>
          ovde ce admin moci da izabere nedelju i da vidi weekly receiptove za
          svakog korisnika u toj nedelji i da unese da li mu je platio
        </p>
      </Layout>
    );
  }
}

export default WeeklySummary;
