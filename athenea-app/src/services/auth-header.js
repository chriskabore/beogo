import * as Constants from '../utils/constants';


export default function authHeader(){
  const user = JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_PARAM_USER));

  if(user && user.accessToken){
    return {Authorization: Constants.AUTH_HEADER_PARAM_BEARER + user.accessToken};
  }else{
      return {};
  }
}