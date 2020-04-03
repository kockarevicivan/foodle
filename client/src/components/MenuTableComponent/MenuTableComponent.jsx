import React, { Component } from "react";

class MenuTable extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
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
              <tr>
                <td>Pohovana piletina</td>
                <td>75</td>
                <td>100gr</td>
                <td>
                  <button>+</button>
                </td>
              </tr>
              <tr>
                <td>Pire krompir</td>
                <td>35</td>
                <td>100gr</td>
                <td>
                  <button>+</button>
                </td>
              </tr>
              <tr>
                <td>Kolac sa kokosom</td>
                <td>60</td>
                <td>1kom</td>
                <td>
                  <button>+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MenuTable;
