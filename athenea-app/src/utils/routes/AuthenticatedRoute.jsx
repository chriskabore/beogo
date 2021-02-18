import React, {Component} from 'react';
import Auth from '../athentication/Auth';
import {Route, Redirect} from 'react-router-dom';

const AuthenticatedRoute = ({component:Component,...rest})=> (
    <Route {...rest} render={props => (Auth.getAuth() ? <Component {...props} /> : <Redirect to="/sign-in" />)} />
    );

export default AuthenticatedRoute;