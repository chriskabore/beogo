import React, {Component} from 'react';
import http from '../utils/http/HttpCommon';
import * as Constants from '../utils/constants';
import authHeader from "../services/auth-header";

const API_URL = Constants.TEST_URL;

class UserService extends Component {

    getPublicContent(){
        return http.get(API_URL+ Constants.API_URL_PARAM_ALL);
    }

    getUserBoard(){
        return http.get(API_URL + Constants.API_URL_PARAM_USER,{headers: authHeader()});
    }

    getAdminBoard(){
        return http.get(API_URL + Constants.API_URL_PARAM_ADMIN,{headers: authHeader()});
    }
}


export default UserService;