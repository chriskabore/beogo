import React, {useState} from 'react';
import * as Constants from "../../utils/constants";
import {validatePassword, validateUserName, validateFirstName, validateLastName, checkPasswordsAreIdentical, clearErrors, shakeInput} from "../validations";
import {signin, signup} from "../../services/AuthService";

import {withRouter} from "react-router-dom";


const useForm = (props) =>  {

    //let history = useHistory(props);


    const [credentials , setCredentials] = useState({});

    const [registrationData , setRegistrationData] = useState({});

    const [rememberMe, setRememberMe] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [errors, setErrors] = useState({});

    const [isFormValid, setIsFormValid]  = useState(false);
  //  const [isAuthenticated, setIsAuthenticated] = useState(false);

   const handleSignInFieldChange = (e) => {
        setErrors({});
        clearErrors();
        const {name, value} = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleSignUpFieldChange = (e) => {
        setErrors({});
        clearErrors();
        const {name, value} = e.target;
        setRegistrationData(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleOnRememberMe = (e) =>{
        setRememberMe(!rememberMe);
    }

    const handleOnAgreedToTerms = (e)=>{
        setAgreedToTerms(!agreedToTerms);
    }

    const handleSignInSubmit = async  (e) =>{
        e.preventDefault();
        let passwordErrorKey="";
        let userNameErrorKey ="";
        userNameErrorKey =  validateUserName(credentials.username);
        passwordErrorKey =  validatePassword(credentials.password);

        if(userNameErrorKey || passwordErrorKey ){
            setIsFormValid(false);
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: userNameErrorKey}));

            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: passwordErrorKey}));
            if(userNameErrorKey){
                shakeInput('#email-address');
            }
            if(passwordErrorKey){
                shakeInput('#password');
            }

        }

        if(isFormValid){
            let user = await signin(credentials.username, credentials.password);
            if(user){
                props.history.push(Constants.DASHBOARD_PATHNAME);
            }else{
                console.error("something went wrong while authenticating user: " + credentials.username);
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["incorrectCredentialsError"]: 'validation.incorrect-email-address-or-password-text'}));
            }

        }
    }

    const handleSignUpSubmit = async (e)=>{
        e.preventDefault();
        let passwordErrorKey="";
        let userNameErrorKey ="";
        let firstNameErrorKey ="";
        let lastNameErrorKey ="";
        let confirmPasswordErrorKey ="";
        let nonIdenticalPasswordsErrorKey="";
        passwordErrorKey = validatePassword(registrationData.password);
        confirmPasswordErrorKey = validatePassword(registrationData.confirmPassword);
        userNameErrorKey = validateUserName(registrationData.username);
        firstNameErrorKey = validateFirstName(registrationData.firstName);
        lastNameErrorKey = validateLastName(registrationData.lastName);
        nonIdenticalPasswordsErrorKey = checkPasswordsAreIdentical(registrationData.password, registrationData.confirmPassword);

        if(firstNameErrorKey){
            setIsFormValid(false);
            shakeInput('#first-name');
            setErrors(prevState => ({...prevState,
                ["firstNameFieldError"]: firstNameErrorKey}));
        }

        if(lastNameErrorKey){
            setIsFormValid(false);
            shakeInput('#last-name');
            setErrors(prevState => ({...prevState,
                ["lastNameFieldError"]: lastNameErrorKey}));
        }

        if(passwordErrorKey){
            setIsFormValid(false);
            shakeInput('#password');
            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: passwordErrorKey}));
        }

        if(userNameErrorKey){
            setIsFormValid(false);
            shakeInput('#username')
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: userNameErrorKey}));
        }

        if(confirmPasswordErrorKey){
            setIsFormValid(false);
            shakeInput('#confirm-password');
            setErrors(prevState => ({...prevState,
                ["confirmPasswordFieldError"]: confirmPasswordErrorKey}));
        }

        if(nonIdenticalPasswordsErrorKey){
            setIsFormValid(false);
            shakeInput('#password');
            shakeInput('#confirm-password');
            setErrors(prevState => ({...prevState,
                ["nonIdenticalPasswordError"]: nonIdenticalPasswordsErrorKey}));
        }
        if(!agreedToTerms){
            let agreedToTermsCheckErrorKey='validation.must-agree-to-terms-and-conditions-text';
            setIsFormValid(false);
            setErrors(prevState => ({...prevState,
                ["agreedToTermsCheckError"]: agreedToTermsCheckErrorKey}));
        }
        if(isFormValid){
            let firstName = registrationData.firstName;
            let lastName = registrationData.lastName;
            let username = registrationData.username;
            let password = registrationData.password;
            let rolesNames = [];
            rolesNames[0]=Constants.ROLE_USER;

           // let response = await signup(firstName,lastName, username,password,agreedToTerms ,null,rolesNames);
            signup(firstName,lastName, username,password,agreedToTerms ,null,rolesNames).then(response=>{
                props.history.push(Constants.SIGNIN_PATHNAME);
            }).catch(err=>{
                console.error("Something went wrong! User was not registered successfully...");
                console.error(err);
            });
            console.log("registering user....");
        }

    }

   const handleSignInOnBlur = (e) =>{
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
                shakeInput('#email-address');
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
                shakeInput('#password');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["passwordFieldError"]: passwordErrorKey}));
            }
        }
    }

    const handleSignUpOnBlur = (e) =>{
        const name = e.target.name;

        let passwordErrorKey="";
        let userNameErrorKey ="";
        let firstNameErrorKey="";
        let lastNameErrorKey="";
        let confirmPasswordErrorKey="";
        let nonIdenticalPasswordsErrorKey="";


        if(name==='username'){
            userNameErrorKey =  validateUserName(registrationData.username);
            if(!userNameErrorKey || "" === userNameErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["emailFieldError"]: ""}));
            }else{
                shakeInput('#email-address');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["emailFieldError"]: userNameErrorKey}));
            }

        }else if(name==='password'){
            passwordErrorKey =  validatePassword(registrationData.password);
            if(!passwordErrorKey || ""===passwordErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["passwordFieldError"]: ""}));
            }else{
                shakeInput('#password');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["passwordFieldError"]: passwordErrorKey}));
            }
        }else if(name==='firstName'){

            firstNameErrorKey = validateFirstName(registrationData.firstName);
            if(!firstNameErrorKey || ""===firstNameErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["firstNameFieldError"]: ""}));
            }else{
                shakeInput('#first-name');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["firstNameFieldError"]: firstNameErrorKey}));
            }

        }else if(name==='lastName'){
            lastNameErrorKey = validateLastName(registrationData.lastName);
            if(!lastNameErrorKey || ""===lastNameErrorKey){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["lastNameFieldError"]: ""}));
            }else{
                shakeInput('#last-name');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["lastNameFieldError"]: lastNameErrorKey}));
            }

        }else if (name==='confirmPassword'){
            confirmPasswordErrorKey = validatePassword(registrationData.confirmPassword);
            nonIdenticalPasswordsErrorKey = checkPasswordsAreIdentical(registrationData.password,registrationData.confirmPassword);
            if((!confirmPasswordErrorKey || ""===confirmPasswordErrorKey) && (!nonIdenticalPasswordsErrorKey || ""===nonIdenticalPasswordsErrorKey)){
                setIsFormValid(true);
                setErrors(prevState => ({...prevState,
                    ["confirmPasswordFieldError"]: ""}));
            }else if(nonIdenticalPasswordsErrorKey){
                shakeInput('#password');
                shakeInput('#confirm-password');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["nonIdenticalPasswordError"]: nonIdenticalPasswordsErrorKey}));
            }else{
                shakeInput('#confirm-password');
                setIsFormValid(false);
                setErrors(prevState => ({...prevState,
                    ["confirmPasswordFieldError"]: confirmPasswordErrorKey}));
            }

        }

    }


    return { handleOnRememberMe, handleOnAgreedToTerms, handleSignInSubmit,handleSignInFieldChange,
        handleSignUpFieldChange,handleSignInOnBlur,handleSignUpOnBlur, handleSignUpSubmit, registrationData, credentials,errors};

}

export default  useForm;