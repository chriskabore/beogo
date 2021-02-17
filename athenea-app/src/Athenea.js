
import './Athenea.css';
import './css/custom.css';
import React  from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/404/NotFound";
import AuthenticatedRoute from "./utils/routing/AuthenticatedRoute";
import AdminRoute from "./utils/routing/AdminRoute";
import Auth from "./utils/authentication/Auth";
import Test from "./pages/test/Test";
import AuthorizedRoute from "./utils/routing/AuthorizedRoute";


function Athenea() {

    Auth.authenticate();
    Auth.setRole("admin");
    const isAuthorized = Auth.getRole()==='admin'? true: false;

  return (
    <Router>
      <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
          <AdminRoute  isAuthorized={isAuthorized} exact path="/settings"  />
          <AuthorizedRoute isAuthorized={isAuthorized} exact path="/test" component={Test} />
          <Route  exact path="/">
              {Auth.getAuth()? (<Redirect to="dashboard"/>): (<Redirect exact to="/sign-in"/>) }
          </Route>
          <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Athenea;
