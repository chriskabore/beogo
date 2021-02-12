import React from 'react';

import {Route, Redirect} from 'react-router-dom';


const AdminRoute = ({component: Component, isAdmin, ...rest}) =>{

    const isSignedIn = true;
    return (
        <Route {...rest} render={props => (
            isSignedIn && isAdmin ? <Redirect to="/settings"/> : <Component {...props}/>
        )}/>
    );

}

export default AdminRoute;