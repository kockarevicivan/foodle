import React, { Component } from "react";

class WeeklySummary extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <h1>WeeklySummary</h1>
        <p>
          ovde ce admin moci da izabere nedelju i da vidi weekly receiptove za
          svakog korisnika u toj nedelji i da unese da li mu je platio
        </p>
      </div>
    );
  }
}

export default WeeklySummary;
