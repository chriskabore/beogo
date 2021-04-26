import React from 'react';
import $ from'jquery';

// validates username by checking that it is a valid email address
export const validateUserName = (username)=>{
    let emailErrorKey = "";
    const emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(!username || ""===username){
        emailErrorKey = 'validation.field-is-required-text';
    }else if(!emailFormat.test(username)){
        emailErrorKey =  'validation.invalid-email-format-text';
    }
    return emailErrorKey;
}

// validates password by checking that it is not empty
export const validatePassword = (password) =>{
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


 export const shakeInput = (inputId) =>{
    $('.shakeable').removeClass('animated shake');
    $(''+inputId).addClass('is-invalid');
    setTimeout(function()
    {
        $('.shakeable').addClass('animated shake')
    },1);
};



export const clearErrors = () =>{
    $('#email-address').removeClass('is-invalid');
    $('#first-name').removeClass('is-invalid');
    $('#last-name').removeClass('is-invalid');
    $('#password').removeClass('is-invalid');
    $('#confirm-password').removeClass('is-invalid');
};

export const validateFirstName = (firstName)=>{
    let firstNameErrorKey="";
    if(!firstName || ""===firstName){
        firstNameErrorKey='validation.field-is-required-text';
    }
    return firstNameErrorKey;
}

export const validateLastName = (lastName)=>{
    let lastNameErrorKey="";
    if(!lastName || ""===lastName){
        lastNameErrorKey='validation.field-is-required-text';
    }
    return lastNameErrorKey;
}

export const checkPasswordsAreIdentical= (password, confirmPassword) =>{
        let nonIdenticalPasswordsErrorKey ="";
        if(password && confirmPassword && !(password.normalize()===confirmPassword.normalize())){
            nonIdenticalPasswordsErrorKey = 'validation.passwords-are-not-identical-text';
        }
        return nonIdenticalPasswordsErrorKey;
}


