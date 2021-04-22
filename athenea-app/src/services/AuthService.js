import React from 'react';
import * as Constants from '../utils/constants';
import axios from "axios";

const API_URL= Constants.AUTHENTICATION_API_URL;

  export const signin  = (username,password)=>{
       let postData ={
           emailAddress:username,
           password:password
       };

       let config ={
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json',
           }
       };
        return axios.post(API_URL+ Constants.API_URL_PARAM_SIGNIN,postData,config).then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

  export const signout = ()=>{
        localStorage.removeItem(Constants.LOCAL_STORAGE_PARAM_USER);
    }

    export const signup=(username, emailAddress, password)=>{
        return axios.post(API_URL+ Constants.API_URL_PARAM_SIGNIN,{
            username,emailAddress,password
        });
    }

    export const getCurrentUser= ()=>{
        return JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));
    }



