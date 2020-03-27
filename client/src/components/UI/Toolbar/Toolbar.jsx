import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <h2>Foodle</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Toolbar;
