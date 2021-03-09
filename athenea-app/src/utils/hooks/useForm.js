import React, {useState} from 'react';
import {authenticateUser} from "../athentication";
import * as Constants from "../../utils/constants";

const useForm= (props) =>  {

    const [credentials , setCredentials] = useState({});

    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({});

    const [isFormValid, setIsFormValid]  = useState(false);

   const handleChange = (e) => {
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
        console.log('submitting form ......');
        let isAuthenticated = false;
        setIsFormValid(true);
        if(isFormValid){
            console.log('form is valid: ', isFormValid);
         isAuthenticated = authenticateUser(credentials);
         console.log('user authenticated successfully: ', isAuthenticated);
            if(isAuthenticated){
                props.history.push(Constants.DASHBOARD_PATHNAME);
            }else if(isAuthenticated){
                setErrors(prevState => ({...prevState,
                    ["incorrectCredentialsError"]: 'validation.incorrect-email-address-or-password-text'}));
            }
        }
    }

   /* const handleOnBlur = (e) =>{
        const name = e.target.name;
        if(name==='email'){
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: Validator.validateEmail(values.email)}));

        }else{
            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: Validator.validatePassword(values.password)}));
        }

    }*/

  /*  const handleSubmit= (e) =>{
        e.preventDefault();
        console.log('there are errors:', !canSubmitForm);
        let incorrectCredentialsError ="";
        if(canSubmitForm){
            console.log("submitting form....");
            let userInfo = Auth.authenticate(values.email, values.password, rememberMe);
            if(userInfo.incorrectCredentialsErrorKey!==""){
                incorrectCredentialsError =userInfo.incorrectCredentialsErrorKey;
                if(incorrectCredentialsError){
                    setErrors(prevState => ({...prevState,
                        ["incorrectCredentialsError"]: incorrectCredentialsError}));
                }
            }
        }

    }*/

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {

        }
    };
    return { handleOnCheck,handleKeyPress, handleSubmit,handleChange, credentials,errors, rememberMe};

}

export default useForm;