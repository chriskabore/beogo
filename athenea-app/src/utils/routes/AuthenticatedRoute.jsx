import React, {Component} from 'react';
import {getUser} from '../athentication';
import {Route, Redirect} from 'react-router-dom';
import {withTranslation} from "react-i18next";


const AuthenticatedRoute = ({component:Component,...rest})=> (

    <Route {...rest} render={props => (getUser() ? <Component {...props} /> : <Redirect to={{pathname:"/sign-in",state:{from: props.location}}} />)} />

    );

export default  withTranslation() (AuthenticatedRoute);