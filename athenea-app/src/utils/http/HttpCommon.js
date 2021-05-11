import axios from "axios";
import * as Constants from "../constants";



const API_URL = Constants.API_BASE_URL;
const currentLanguage = localStorage.getItem("currentLanguage");

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept-Language': ''+currentLanguage
    }
});