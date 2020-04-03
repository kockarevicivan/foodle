import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";
import {
  getAllForDay,
  createItem,
  editItem,
  removeItem
} from "./store/actions/menu/menuActions";
import AuthRoute from "./components/Routes/AuthRoute";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile";
import PlaceOrder from "./pages/PlaceOrder";
import OrderHistory from "./pages/OrderHistory";
import OrderOverview from "./pages/OrderOverview";
import DailyMenu from "./pages/DailyMenu";
import WeeklySummary from "./pages/WeeklySummary";
import ManageUser from "./pages/ManageUser";

class App extends Component {
  componentDidMount() {
    this.props.isAuthenticatedAction();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <AuthRoute path="/dashboard" component={Dashboard} />
          <AuthRoute path="/placeOrder" component={PlaceOrder} />
          <AuthRoute path="/orderHistory" component={OrderHistory} />
          <AuthRoute path="/manageUsers" component={ManageUser} />
          <AuthRoute path="/profile" component={Profile} />
          <AuthRoute path="/ordersOverview" component={OrderOverview} />
          <AuthRoute path="/dailyMenu" component={DailyMenu} />
          <AuthRoute path="/weeklySummary" component={WeeklySummary} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  items: state.menuReducers.items
}); 

export default connect(mapStateToProps, {
  isAuthenticatedAction,
  getAllForDay: items => getAllForDay(items),
  createItem: item => createItem(item),
  editItem: (itemId, item) => editItem(itemId, item),
  removeItem: itemId => removeItem(itemId)
})(App);
