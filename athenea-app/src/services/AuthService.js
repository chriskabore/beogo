import React from 'react';
import * as Constants from '../utils/constants';
import authHeader from "../services/auth-header";
import http from '../utils/http/HttpCommon';


const API_URL = Constants.AUTHENTICATION_URL;

const headersData = {
    headers: {
        'authorization': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

export const signin = async (username, password) => {

    let signInData = {
        emailAddress: username,
        password: password
    };

    try{
        const response =  await http.post(API_URL + Constants.API_URL_PARAM_SIGNIN, signInData, authHeader(headersData));
        const {data} = response;
        return data;
    }catch (error) {
        console.error("Oops! something went wrong...");
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */

            console.log(error.response.status);
            console.log(error.response.data.error);
            console.log(error.response.data);
            console.log(error.response.headers);
        }else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error);
    }
}

export const signout = () => {
    removeUserSession();
}

export const signup = (firstName, lastName, username, password, agreedToTerms, position, rolesNames) => {

    let signUpData = {
        emailAddress: username,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        agreedToTerms: agreedToTerms,
        position: position,
        rolesNames: rolesNames

    };

    try{
        const response = http.post(API_URL + Constants.API_URL_PARAM_SIGNUP, signUpData, authHeader(headersData));
        return response;
    }catch (error) {
        console.error("Oops! something went wrong...");
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */

            console.log(error.response.status);
            console.log(error.response.data.error);
            console.log(error.response.data);
            console.log(error.response.headers);
        }else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error);
    }

}


// set the token and user from the session storage
export const setUserSession = (authDetails) => {
    if(authDetails){
        sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_AUTH_DETAILS, JSON.stringify(authDetails));
        sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHENTICATED, true);
        if(authDetails.roles){
            let roles = authDetails.roles;
            if (roles.includes(Constants.ROLE_ADMIN)) {
                sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHORIZED, true);
            }
        }
    }

}

// remove the token and user from the session storage
export const removeUserSession = () => {
    localStorage.removeItem(Constants.SESSION_STORAGE_PARAM_AUTH_DETAILS);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_AUTH_DETAILS);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_CURRENT_USER_DETAILS);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_DISPLAY_SUBMENU);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_INDEX);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_SUBMENU_INDEX);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_CURRENT_USER_DETAILS);
    sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_IS_CURRENT_USER_INFO_LOADED);
    sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHENTICATED, false);
    sessionStorage.setItem(Constants.SESSION_STORAGE_PARAM_IS_AUTHORIZED, false);
}



