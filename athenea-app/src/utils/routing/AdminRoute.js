import React, {Component} from 'react';
import Auth from "../authentication/Auth";
import {Route, Redirect, Switch} from 'react-router-dom';
import Settings from "../../pages/settings/Settings";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Preferences from "../../pages/settings/Preferences";

const AdminRoute = ({ component: Component, isAuthorized,  ...rest }) => {
        <Route {...rest} render={(props) => (Auth.getAuth() && isAuthorized) ? (<Component {...rest}{...props}/> ) : (<Redirect to={{pathname:'/sign-in',state:{from: props.location},}}/>)}/>

}

export default AdminRoute;