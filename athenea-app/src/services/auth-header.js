import * as Constants from '../utils/constants';


export default function authHeader(){
  const user = JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));

  const headersData = {
    headers: {
      'authorization': '',
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8898/api/'
    }
  };

  if(user && user.accessToken){
    headersData.headers.authorization= Constants.AUTH_HEADER_PARAM_BEARER + user.accessToken;
    return headersData;
  }else{
      return headersData;
  }
}