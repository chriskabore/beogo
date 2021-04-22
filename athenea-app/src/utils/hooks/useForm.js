import React, {useState} from 'react';
import {authenticateUser} from "../athentication";
import * as Constants from "../../utils/constants";
import {validatePassword, validateUserName, clearErrors, shakeUserNameInput,shakePasswordInput} from "../validations";
import {signin} from "../../services/AuthService";


const useForm= (props) =>  {

    const [credentials , setCredentials] = useState({});

    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({});

    const [isFormValid, setIsFormValid]  = useState(false);

   const handleChange = (e) => {
        setErrors({});
        clearErrors();
        const {name, value} = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleOnCheck = (e) =>{
        setRememberMe(!rememberMe);
    }

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        let passwordErrorKey="";
        let userNameErrorKey ="";
        let canSubmitForm = false;
        let isAuthenticated = false;
        userNameErrorKey =  validateUserName(credentials.username);
        passwordErrorKey =  validatePassword(credentials.password);
        if(userNameErrorKey || passwordErrorKey ){
            setIsFormValid(false);
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: userNameErrorKey}));

            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: passwordErrorKey}));
            if(userNameErrorKey){
                shakeUserNameInput();
            }
            if(passwordErrorKey){
                shakePasswordInput();
            }

        }else if(!userNameErrorKey && !passwordErrorKey){
            canSubmitForm = true;

        }

        if(canSubmitForm){
          signin(credentials.username, credentials.password).then(
             ()=>{
                console.error("login called is successful:",{});
             },
             error =>{
                 console.error("login called is not successful:",{});
             }
         );
            if(isAuthenticated){
                props.history.push(Constants.DASHBOARD_PATHNAME);
            }else if(!isAuthenticated){
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["incorrectCredentialsError"]: 'validation.incorrect-email-address-or-password-text'}));
            }
        }
    }

   const handleOnBlur = (e) =>{
       const name = e.target.name;
       let passwordErrorKey="";
       let userNameErrorKey ="";
        if(name==='username'){
            userNameErrorKey =  validateUserName(credentials.username);
            if(!userNameErrorKey || "" === userNameErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["emailFieldError"]: ""}));
            }else{
                shakeUserNameInput();
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["emailFieldError"]: userNameErrorKey}));

            }

        }else if(name==='password'){
            passwordErrorKey =  validatePassword(credentials.password);
            if(!passwordErrorKey || ""===passwordErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["passwordFieldError"]: ""}));
            }else{
                shakePasswordInput();
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["passwordFieldError"]: passwordErrorKey}));

            }
        }

    }




    return { handleOnCheck, handleSubmit,handleChange,handleOnBlur, credentials,errors};

}

export default useForm;