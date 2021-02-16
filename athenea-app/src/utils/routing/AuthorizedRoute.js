import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from "../authentication/Auth";

const AuthorizedRoute = ({ component: Component, isAuthorized, ...rest }) => {
    if(Auth.getAuth()){
        if(!isAuthorized){
            return  <Redirect to="/dashboard"/>
        }else{
           return <Route {...rest} render={props => (<Component {...props}/>)}/>
        }
    }else{

        return  <Redirect to="/sign-in"/>;
    }
}




export default AuthorizedRoute;