import React, {Component} from 'react';
import axios from 'axios';
import * as Constants from '../utils/constants';
import authHeader from "../services/auth-header";

const API_URL = Constants.TEST_API_URL;

class UserService extends Component {

    getPublicContent(){
        return axios.get(API_URL+ Constants.API_URL_PARAM_ALL);
    }

    getUserBoard(){
        return axios.get(API_URL + Constants.API_URL_PARAM_USER,{headers: authHeader()});
    }

    getAdminBoard(){
        return axios.get(API_URL + Constants.API_URL_PARAM_ADMIN,{headers: authHeader()});
    }
}


export default UserService;