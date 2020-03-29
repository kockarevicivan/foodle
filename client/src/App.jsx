import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";
import AuthRoute from "./components/Routes/AuthRoute";

import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import OrderOverview from "./pages/OrderOverview/OrderOverview";
import DailyMenu from "./pages/DailyMenu/DailyMenu";
import WeeklySummary from "./pages/WeeklySummary/WeeklySummary";

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
<<<<<<< HEAD:client/src/App.jsx

=======
>>>>>>> Rework table component:client/src/App.js
export default connect(null, { isAuthenticatedAction })(App);
