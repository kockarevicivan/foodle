import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import DashboardPage from "./pages/Dashboard/Dashboard";
import RegisterPage from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
