import React, {Suspense, useEffect} from 'react';
import './App.css';
import './css/athenea.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./pages/404/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import Preferences from "./pages/settings/Preferences";
import Settings from "./pages/settings/Settings";
import Test from "./pages/test/Test";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import AuthenticatedRoute from "./utils/routes/AuthenticatedRoute";
import AuthorizedRoute from "./utils/routes/AuthorizedRoute";
import Auth from "./utils/athentication/Auth";
import * as Constants from './utils/constants';



function Athenea () {
  Auth.authenticate();
  Auth.setRole('admin');
  const isAuthorized = Auth.getRole()===Constants.ROLE_ADMIN ? true:false;
  return (
    <>
        <Router>
            <Switch>
                <Route exact path={Constants.SIGNUP_PATHNAME} component={SignUp} />
                <Route exact path={Constants.SIGNIN_PATHNAME} component={SignIn} />
                <AuthenticatedRoute exact path={Constants.DASHBOARD_PATHNAME} component={Dashboard} />
                <AuthenticatedRoute exact path={Constants.PREFERENCES_PATHNAME} component={Preferences} />
                <AuthorizedRoute isAuthorized={isAuthorized} exact path={Constants.SETTINGS_PATHNAME} component={Settings} />
                <AuthorizedRoute isAuthorized={isAuthorized} exact path="/test" component={Test} />
                <AuthenticatedRoute exact path={Constants.HOME_PATHNAME} component={Dashboard} />
                <Route path={Constants.ALL_PATHS} component={NotFound} />
            </Switch>
        </Router>




    </>
  );
};

export default function  App(){
  return(
          <Suspense fallback={<div>Loading...</div>}>
              <Athenea />
          </Suspense>
  );
};
