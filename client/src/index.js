import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css";
import store from "./store/store";
import { Provider } from "react-redux";

const app = (
  <Provider store={store}>
    <App></App>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
