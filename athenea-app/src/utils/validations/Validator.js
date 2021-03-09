import React, {Component} from 'react';

// validates username by checking that it is a valid email address
export const validateUserName = (username)=>{
    let emailErrorKey = '';
    const emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(!username && !username.trim()){
        emailErrorKey = 'validation.field-is-required-text';
    }else if(!emailFormat.test(username)){
        emailErrorKey =  'validation.invalid-email-format-text';
    }
    return emailErrorKey;
}

// validates password by checking that it is not empty
export const validatePassword = (password) =>{
    let passwordErrorKey = '';
    if(!password && !password.trim()){
        passwordErrorKey = 'validation.field-is-required-text';
    }
    return passwordErrorKey;
}

// validates password by checking its format and length
export const validatePasswordFormat = (password) =>{
    let passwordErrorKey = '';
    const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if(password){
       if(!pwdRegex.test(password)){
            passwordErrorKey = 'validation.password-format-text';
       }
       if(password.length < 8){
           passwordErrorKey='validation.password-length-text';
       }
    }
    return passwordErrorKey;
}
