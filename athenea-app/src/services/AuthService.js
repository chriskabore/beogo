import React from 'react';
import * as Constants from '../utils/constants';
import authHeader from "../services/auth-header";
import http from '../utils/http/HttpCommon';



const API_URL = Constants.AUTHENTICATION_URL;

const  headersData = {
    headers: {
        'authorization': '',
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

export const signin = (username, password) => {

    let signInData = {
        emailAddress: username,
        password: password
    };


    return http.post(API_URL + Constants.API_URL_PARAM_SIGNIN, signInData, authHeader(headersData)).then(response => {

        if (response.data.accessToken) {
            localStorage.setItem(Constants.LOCAL_STORAGE_PARAM_USER, JSON.stringify(response.data));
        }
        sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHENTICATED, true);
        if (response.data.roles) {
            let roles = response.data.roles;
            if (roles.includes(Constants.ROLE_ADMIN)) {
                sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHORIZED, true);
            }
        }
        return response.data;
    }).catch(err => {
        console.error("Oops! something went wrong...", err);
    });
}

export const signout = () => {
    removeUserSession();
}

export const signup = (firstName,lastName, username,password, agreedToTerms,position,rolesNames ) => {

    let signUpData = {
        emailAddress: username,
        password: password,
        username: username,
        firstName:firstName,
        lastName:lastName,
        agreedToTerms: agreedToTerms,
        position:position,
        rolesNames:rolesNames

    };


    return http.post(API_URL + Constants.API_URL_PARAM_SIGNUP,signUpData,authHeader(headersData)).then(response => {
        if(response.data){
            return response.data;
        }
    }).catch(err=>{
        console.error("Oops! something went wrong...", err);
        }
    );
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));
}

// set the token and user from the session storage
export const setUserSession = (user) => {
    sessionStorage.setItem(Constants.LOCAL_STORAGE_PARAM_USER, JSON.stringify(user));
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    localStorage.removeItem(Constants.LOCAL_STORAGE_PARAM_USER);
    sessionStorage.removeItem(Constants.LOCAL_STORAGE_PARAM_USER);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_DISPLAY_SUBMENU);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_INDEX);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_SUBMENU_INDEX);
    sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHENTICATED, false);
    sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHORIZED, false);
}



