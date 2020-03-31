import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

import { isAuthenticatedAction } from "./store/actions/authentication/authenticationActions";
import { getAllForDay, createItem, editItem, removeItem } from "./store/actions/menu/menuActions";
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
    //this.props.getAllForDay(new Date().toISOString());
    
    // this.props.createItem({
    //   title: 'Kokos kolac',
    //   price: 60,
    //   quantityType: '1kom'
    // });
    /*
    this.props.editItem('5e820aaa53365a3cf848ef04',{
      _id: '5e820aaa53365a3cf848ef04',
      title: 'Gej kolac',
      price: 69,
      quantityType: '1kom'
    });
    */
    //this.props.removeItem("5e820c6c53365a3cf848ef07");
    

  }

  render() {
    console.log(this.props.items);
    
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

const mapStateToProps = state => ({
  items: state.menuReducers.items
}); 

export default connect(mapStateToProps, { 
  isAuthenticatedAction,
  getAllForDay: items => getAllForDay(items),
  createItem: item => createItem(item),
  editItem: (itemId,item) => editItem(itemId,item),
  removeItem: itemId => removeItem(itemId)
   })(App);
