
import './Athenea.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/404/NotFound";

function Athenea() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route  exact path="/">
              <Redirect exact from='/' to="dashboard"/>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Athenea;
