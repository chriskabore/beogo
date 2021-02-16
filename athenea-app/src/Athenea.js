
import './Athenea.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from "./pages/sign-in/SignIn";

function Athenea() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default Athenea;
