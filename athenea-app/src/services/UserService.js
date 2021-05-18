import React, {Component} from 'react';
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

    export const getCurrentUser = () => {
     return JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));
    }

    export const getUserDetails = (emailAddress)=>{
        return http.get(API_URL  + emailAddress,authHeader(headersData)
        ).then(response=>{
            console.log("response from get details",response);
            if(response.data.responseUser){
                localStorage.setItem("currentUserDetails", JSON.stringify(response.data.responseUser));
            }
            console.info("fetched user details successfully", response.data.message);
            }).catch(err => {
            console.error("Oops! something went wrong...", err);
        });
    }





