import React from 'react';

const AtheneaRoute = ({ component: Component, restricted, ...rest }) => (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (isLogin() && restricted ?
        <Redirect to="/home" /> : <Component {...props} />)} />
)

export default AtheneaRoute;