

// return the user data from the session storage
import userImg from "../../img/user.svg";
import {ROLE_ADMIN, ROLE_USER} from "../constants";

export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.setItem('isAuthenticated', false);
    sessionStorage.setItem('isAuthorized',false);
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('isAuthenticated', user.isSignedIn);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

// validates the credentials of the user with a mock user
export const authenticateUser = (credentials) =>{
    let isAuthenticated = false;
    const userToken = '12345';
    const demoUser = {
        id: "123456",
        name:"Kirsi Armand KABORE",
        position:"Project Coordinator",
        avatar:userImg,
        isSignedIn:isAuthenticated,
        roles:[ROLE_ADMIN,ROLE_USER],
        username:"kirsikabore@gmail.com",
        password:"secret",
        rememberMe:false
    };

    if(credentials){
      if(demoUser.username===credentials.username && demoUser.password===credentials.password){
          isAuthenticated = true;
          demoUser.isSignedIn = true;
          setUserSession(userToken,demoUser);
          setUserPermissions(demoUser);
      }
    }

    return isAuthenticated;
}


export const setUserPermissions= (user)=>{
    if(user){
        let roles = [];
        roles = user.roles;
       if(roles.includes(ROLE_ADMIN)){
           sessionStorage.setItem('isAuthorized', true);
       }
    }
}



