import React from 'react';
import * as Constants from "../utils/constants";
import authHeader from "./auth-header";
import http from '../utils/http/HttpCommon';



const API_URL = Constants.FILE_URL;

const user = JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));

const uploadFileHeadersData = {
    headers: {
        'authorization': '',
        'Accept' : 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    },
    onUploadProgress:{},
};

if(user && user.accessToken){
    uploadFileHeadersData.headers.authorization = Constants.AUTH_HEADER_PARAM_BEARER + user.accessToken;
}

console.warn("headers sent", uploadFileHeadersData);


export const uploadFile = (file, onUploadProgress)=>{
    let formData = new FormData();
    formData.append('file',file);
    uploadFileHeadersData.onUploadProgress=onUploadProgress;

    return http.post(API_URL + Constants.API_URL_PARAM_UPLOAD,formData, uploadFileHeadersData);

}


