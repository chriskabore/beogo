import React from 'react';
import userImg from "../../img/user.svg";
import {ROLE_ADMIN} from "../constants";

const Auth ={
    isAuthenticated:false,
    role : 'user',
    userData:{
        id: "userId",
        name:"Kirsi Armand KABORE",
        position:"Project Coordinator",
        avatar:userImg,
        isSignedIn:false,
        role:ROLE_ADMIN,
        emailAddress:"kirsikabore@gmail.com",
        password:"secret",
        rememberMe:false,
        incorrectCredentialsErrorKey:''
    },
    authenticate(emailAddress, password, rememberMe){

        if(this.userData.emailAddress===emailAddress && this.userData.password===password){
            this.isAuthenticated = true;
            this.userData.isSignedIn=true;
            this.userData.rememberMe=rememberMe;
        }else{
            this.userData.incorrectCredentialsErrorKey='validation.incorrect-email-address-or-password-text';
        }
        return this.userData;
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