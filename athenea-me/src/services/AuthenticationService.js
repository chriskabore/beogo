import http from '../helpers/http/HttpClient';
import * as Constant from '../helpers/constants/index';
import authHeader from "../helpers/http/HttpHeaderHelper";

const API_URL= Constant.AUTHENTICATION_URL + Constant.API_URL_PARAM_SIGN_IN;

const headersData = {
    headers: {
        'authorization': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};


export const deleteUserSessionData = ()=>{
    console.log("removing user session data ....");
}

export const storeUserSessionData = (data) =>{
    console.log("storing user session data ...",data);
}

export const authenticateUser = async (signInData)=>{

    try{
        const response =  await http.post(API_URL, signInData, authHeader(headersData));
        const {data} = response;
        return data;
    }catch (error) {
        console.error("Oops! something went wrong...");
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data.error);
            console.log(error.response.data);
            console.log(error.response.headers);
        }else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
    }
}