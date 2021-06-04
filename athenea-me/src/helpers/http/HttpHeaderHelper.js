import * as Constant from '../constants/index';
import {loadFromSessionStorage} from "../storage/AppStorageHelper";

export default function authHeader(headersData){

    const user = loadFromSessionStorage(Constant.SESSION_STORAGE_PARAM_AUTH_DETAILS);

    if(!headersData){
        headersData = {
            headers: {
                'authorization': '',
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }


    if(user && user.accessToken){
        headersData.headers.authorization= Constant.AUTH_HEADER_PARAM_BEARER + user.accessToken;
        return headersData;
    }else{
        return headersData;
    }
}