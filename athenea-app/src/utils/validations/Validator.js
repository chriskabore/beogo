import React, {Component} from 'react';

const Validator = {

     validateEmailFormat(fieldName, value){
        let [lhs, rhs] = value.split('@');
        lhs = lhs || '';
        rhs = rhs || '';
        if (lhs.length <= 0 || rhs.length <= 0) {
            return `${fieldName} must be in a standard email format.`; }
    },

    validatePasswordFormat(fieldName,value){
        const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(! pwdRegex.test(value)){
            return `${fieldName} must contain at least one number, one special character and one uppercase and lowercase letter, and at least 8 or more characters`;
        }
    },
    validateNotEmpty(fieldName, value){
        if (value.length <= 0) {
            return `${fieldName} must be filled out.`; }
    }

}

export default Validator;