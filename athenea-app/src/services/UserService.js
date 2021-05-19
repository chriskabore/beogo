import React from 'react';
import http from '../utils/http/HttpCommon';
import * as Constants from '../utils/constants';
import authHeader from "../services/auth-header";

const API_URL = Constants.USERS_URL;

  const  headersData = {
    headers: {
        'authorization': '',
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
  };

    export const getCurrentUserAuthDetails = () => {
     return JSON.parse(sessionStorage.getItem(Constants.LOCAL_STORAGE_PARAM_AUTH_DETAILS));
    }


    export const getCurrentUserInfo= ()=>{
        return JSON.parse(sessionStorage.getItem(Constants.LOCAL_STORAGE_PARAM_CURRENT_USER_DETAILS));
    }


    export const  loadUserInfo =  async (emailAddress)=>{
        try{
            const response = await http.get(API_URL  + emailAddress,authHeader(headersData));
            const {message, responseUser}= response.data;

            sessionStorage.setItem(Constants.LOCAL_STORAGE_PARAM_CURRENT_USER_DETAILS,JSON.stringify(responseUser));
            console.info( message);
            return responseUser;
        }catch(error){
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





