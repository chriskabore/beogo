import React, {Component} from 'react';
import Auth from '../athentication/Auth';
import {Route, Redirect} from 'react-router-dom';

const AuthenticatedRoute = ({component:Component,...rest})=> (
    <Route {...rest} render={props => (localStorage.getItem('isAuthenticated') ? <Component {...props} /> : <Redirect to={{pathname:"/sign-in",state:{from: props.location}}} />)} />
    );

export default AuthenticatedRoute;