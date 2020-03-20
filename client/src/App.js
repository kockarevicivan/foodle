import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/Login'
import HomePage from './pages/Home/Home';
import Layout from './components/Shared/Layout';
import AdminPage from './pages/Administration';
import AuthRoute from "./components/Utils/AuthRoute"
import GuestRoute from './components/Utils/GuestRoute';

function App() {
  return (



    <BrowserRouter>
    <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
    
      <GuestRoute component={LoginPage} path="/login"></GuestRoute>
    <AuthRoute path="/admin" component={AdminPage}></AuthRoute>
    <Redirect to="/login"></Redirect>
    </Switch>
</Layout>
    </BrowserRouter>
   
  );
}

export default App;
