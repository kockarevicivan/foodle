import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import MenuTable from "../../components/MenuTableComponent/MenuTableComponent";

class DailyMenu extends Component {
  state = {};
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
          <form action="#">
            <h2 className="text-center pt-4 pb-4">Dodaj novi menu item</h2>
            <div className="d-flex flex-column">
              <input
                type="text"
                placeholder="Naziv hrane"
                className="form-control"
                name=""
                id=""
              />

              <input
                type="number"
                placeholder="Cena"
                className="form-control"
                name=""
                id=""
              />

              <select className="d-block">
                <option>100gr</option>
                <option>1kom</option>
              </select>
              <button className="btn">Dodaj</button>
            </div>
            <div className="row"></div>
          </form>
          <MenuTable></MenuTable>
        </div>
      </Layout>
    );
  }
}

export default DailyMenu;
