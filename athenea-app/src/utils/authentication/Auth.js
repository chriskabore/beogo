import React, {Component} from 'react';

const Auth ={
    isAuthenticated:false,
    role : 'user',
    authenticate(){
        this.isAuthenticated = true;
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