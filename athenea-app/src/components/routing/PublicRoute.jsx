import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogin} from "../utils/Authentication";


const PublicRoute = ({component: Component, isRestricted, ...rest}) => {

    return (
        // isRestricted = false meaning public route
        // isRestricted = true meaning restricted route
        <Route {...rest} render={props => (isLogin() && isRestricted ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
    );
};


export default PublicRoute;