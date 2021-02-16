import React, {Component} from 'react';
import Auth from "../authentication/Auth";
import {Route, Redirect, Switch} from 'react-router-dom';
import Settings from "../../pages/settings/Settings";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Preferences from "../../pages/settings/Preferences";

const AdminRoute = ({ component: Component, isAuthorized,  ...rest }) => {
    if(Auth.getAuth()){
       if(isAuthorized){
         return  <Route {...rest} component={Settings}/>
       }else{
         return  <Route {...rest} component={Preferences}/>
       }
    }else{
      return  <Redirect to="/sign-in"/>;
    }

}

export default AdminRoute;