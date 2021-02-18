import React, {Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
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


function Athenea () {
  const { t, i18n } = useTranslation();
  const changeLanguage =(language) => {
    i18n.changeLanguage(language);
  };
  const isAuthorized = Auth.getRole()==="admin"? true:false;
  return (
    <>
        <Router>
            <Switch>
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/sign-in" component={SignIn} />
                <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
                <AuthenticatedRoute exact path="/preferences" component={Preferences} />
                <AuthorizedRoute isAuthorized={isAuthorized} exact path="/settings" component={Settings} />
                <AuthorizedRoute isAuthorized={isAuthorized} exact path="/test" component={Test} />
                <Route path="*" component={NotFound} />
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
