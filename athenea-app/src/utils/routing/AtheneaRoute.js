import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AtheneaRoute = ({ component: Component, restricted, ...rest }) => (

    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => ( restricted ?
        <Redirect to="/home" /> : <Component {...props} />)} />
);

export default AtheneaRoute;