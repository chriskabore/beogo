import * as Constants from '../utils/constants';


export default function authHeader(headersData){

  const user = JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_AUTH_DETAILS));

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
    headersData.headers.authorization= Constants.AUTH_HEADER_PARAM_BEARER + user.accessToken;
    return headersData;
  }else{
      return headersData;
  }
}