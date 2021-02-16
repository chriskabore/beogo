import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Auth from '../authentication/Auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (Auth.getAuth() ? <Component {...props} /> : <Redirect to="/sign-in" />)} />
);

export default AuthenticatedRoute;