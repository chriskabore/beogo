import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {ROLE_ADMIN} from "../constants";
import {withTranslation} from "react-i18next";
import {getCurrentUserAuthDetails} from "../../services/UserService";

const AuthorizedRoute = ({component:Component,isAuthorized,...rest}) => (
    <Route {...rest} render={(props)=>{

        let authUserDetails = getCurrentUserAuthDetails();

        if(!authUserDetails){
            return (<Redirect to={{pathname:'/sign-in', state:{from:props.location}}}/>);
        }

        if(authUserDetails && !authUserDetails.roles.includes(ROLE_ADMIN)){
            return (<Redirect to={{pathname:'/', state:{from:props.location}}}/>);
        }
        return <Component {...props}/>
    }}/>
);



export default  withTranslation() (AuthorizedRoute);