import React, {Component} from 'react';
import $ from'jquery';

// validates username by checking that it is a valid email address
export const validateUserName = (username)=>{
    console.clear();
    console.log('validating username...');
    let emailErrorKey = "";
    const emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(!username || ""===username){
        emailErrorKey = 'validation.field-is-required-text';
        console.log('error found in username:', 'username empty');
    }else if(!emailFormat.test(username)){
        emailErrorKey =  'validation.invalid-email-format-text';
        console.log('error found in username:', 'email format invalid');
    }
    return emailErrorKey;
}

// validates password by checking that it is not empty
export const validatePassword = (password) =>{
    console.clear();
    console.log('validating password...');
    let passwordErrorKey = "";
    if(!password || ""===password){
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


 export const shakeUserNameInput = () =>{
    $('.shakeable').removeClass('animated shake');
    $('#email-address').addClass('is-invalid');
    setTimeout(function()
    {
        $('.shakeable').addClass('animated shake')
    },1);


};

export const shakePasswordInput = ()=>{
    $('.shakeable').removeClass('animated shake');
    $('#password').addClass('is-invalid');
    setTimeout(function()
    {
        $('.shakeable').addClass('animated shake')
    },1);
};

export const clearErrors = () =>{
    $('#email-address').removeClass('is-invalid');
    $('#password').removeClass('is-invalid');
};
