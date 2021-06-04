import axios from "axios";
import * as Constant from "../constants";
import {loadFromLocalStorage} from "../storage/AppStorageHelper";


const API_URL = Constant.API_BASE_URL;
const currentLanguage = loadFromLocalStorage(Constant.CURRENT_LOCALE_PARAM);

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept-Language': ''+currentLanguage
    }
});