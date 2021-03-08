import React from 'react';

const Validator = {

     validateEmailFormat(fieldName, value){
         let error = {fieldName:'',i18nKey:''};
        let [lhs, rhs] = value.split('@');
        lhs = lhs || '';
        rhs = rhs || '';
        if (lhs.length <= 0 || rhs.length <= 0) {
            error = {fieldName: fieldName, i18nKey: 'validation.invalid-email-format-text'};
            return error;
        }
    },

    validatePasswordFormat(fieldName,value){
        let error = {fieldName:'',i18nKey:''};
        const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if(! pwdRegex.test(value)){
            error = {fieldName: fieldName, i18nKey: 'validation.password-format-text'};
            return error;
        }
        if(value.length<8){
            error = {fieldName: fieldName, i18nKey: 'validation.password-length-text'};
             return error;
        }
    },
    validateNotEmpty(fieldName, value){
         let error = {fieldName:'',i18nKey:''};
        if (value.length <= 0) {
           // return `${fieldName} `;
            error = {fieldName: fieldName, i18nKey: 'validation.field-is-required-text'};
            return error;
        }
    },
    validateEmailFormatWithRegex(fieldName, value){
        let error = {fieldName:'',i18nKey:''};
        const emailRegEx = new RegExp("/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$/i") ;
        if(!emailRegEx.test(value)){
            error = {fieldName: fieldName, i18nKey:'validation.invalid-email-format-text' };
            return error;
        }
    },
    validateEmail( emailValue,emailFieldName){
         console.log('validating email......');
         let notEmptyErrorKey = 'validation.field-is-required-text';
         let invalidEmailErrorKey = 'validation.invalid-email-format-text';
         //const emailRegEx = new RegExp("/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$/i");
         const emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
         if(!emailValue || !emailValue.trim()){
             console.log('email is required!');
             return notEmptyErrorKey;
         }
         if(!emailFormat.test(emailValue)){
             console.log('email is not valid');
             return invalidEmailErrorKey;
         }
         return null;
    },
    validatePassword(passwordValue, passwordFieldName ){
        console.log('validating password......');
        let notEmptyErrorKey = 'validation.field-is-required-text';
        if(!passwordValue || !passwordValue.trim()){
            console.log('password is required!');
            return notEmptyErrorKey;
        }
        return null;
    }

}

export default Validator;