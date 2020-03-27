import React, { Component } from "react";
import Layout from "../../../components/Layout/Layout";
import MenuTable from "../../../components/MenuTableComponent/MenuTableComponent"
class AdminDashboard extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <MenuTable></MenuTable>
      </Layout>
    );
  }
}

export default AdminDashboard;
