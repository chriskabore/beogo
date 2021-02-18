import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../athentication/Auth'

const AuthorizedRoute = ({component:Component,isAuthorized,...rest}) => (
    <Route {...rest} render={(props)=>{
        const isSignedIn =Auth.getAuth();
        if(!isSignedIn){
            return (<Redirect to={{pathname:'/sign-in', state:{from:props.location}}}/>);
        }

        if(!isAuthorized){
            return (<Redirect to={{pathname:'/', state:{from:props.location}}}/>);
        }
        return <Component {...props}/>
    }}/>
);



export default AuthorizedRoute;