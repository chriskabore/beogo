import React from 'react';
import userImg from "../../img/user.svg";
import {ROLE_ADMIN} from "../constants";

const Auth ={
    isAuthenticated:false,
    role : 'user',
    authenticate(emailAddress, password, rememberMe){
        let userInfo= {
            id: "userId",
            name:"Kirsi Armand KABORE",
            position:"Project Coordinator",
            avatar:userImg,
            isSignedIn:false,
            role:ROLE_ADMIN,
            emailAddress:"kirsikabore@gmail.com",
            password:"secret",
            rememberMe:false,
            errors:[]
        }

        if(userInfo.emailAddress===emailAddress && userInfo.password===password){
            this.isAuthenticated = true;
            userInfo.isSignedIn=true;
            userInfo.rememberMe=rememberMe;
            return userInfo;
        }else{
            userInfo={id:'',name:'',position: '', avatar:'', rememberMe: rememberMe, role:'', isSignedIn: false,emailAddress: "kirsikabore@gmail.com",password: "secret",errors:[]};
            const error = {i18nKey:'validation.incorrect-email-address-or-password-text', fieldName:''};
            userInfo.errors.push(error);
            return userInfo;
        }

    },
    signOut (){
        this.isAuthenticated = false;
    },
    getAuth(){
        return this.isAuthenticated;
    },
    setRole(role){
        this.role = role;
    },
    getRole (){
        return this.role;
    }
};

export default Auth;