import React from 'react';
import * as Constants from "../utils/constants";
import authHeader from "./auth-header";
import http from '../utils/http/HttpCommon';



const API_URL = Constants.FILES_URL;


const uploadFileHeadersData = {
    headers: {
        'authorization': '',
        'Accept' : 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    },
    onUploadProgress:{},
};



console.warn("headers sent", uploadFileHeadersData);


export const uploadFile = (file, onUploadProgress)=>{
    let formData = new FormData();
    formData.append('file',file);
    uploadFileHeadersData.onUploadProgress=onUploadProgress;

    return http.post(API_URL + Constants.API_URL_PARAM_UPLOAD,formData, uploadFileHeadersData, authHeader(uploadFileHeadersData));

}


