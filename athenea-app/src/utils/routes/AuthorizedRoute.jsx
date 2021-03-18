import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getUser} from '../athentication';
import {ROLE_ADMIN} from "../constants";

const AuthorizedRoute = ({component:Component,isAuthorized,...rest}) => (
    <Route {...rest} render={(props)=>{

        let user = getUser();

        if(!user){
            return (<Redirect to={{pathname:'/sign-in', state:{from:props.location}}}/>);
        }

        if(user && !user.roles.includes(ROLE_ADMIN)){
            return (<Redirect to={{pathname:'/', state:{from:props.location}}}/>);
        }
        return <Component {...props}/>
    }}/>
);



export default AuthorizedRoute;