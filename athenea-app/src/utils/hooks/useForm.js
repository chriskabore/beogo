import React, {useState} from 'react';
import Validator from "../validations/Validator";
import Auth from "../athentication/Auth";

const useForm= () =>  {

    let canBeSubmitted = false;
    const [values , setValues] = useState({
        email : "",
        password : ""
    });

    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({});

    const [canSubmitForm, setCanSubmitForm] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleOnCheck = (e) =>{
        setRememberMe(!rememberMe);
    }

    const handleOnBlur = (e) =>{
        const name = e.target.name;
        if(name==='email'){
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: Validator.validateEmail(values.email)}));

        }else{
            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: Validator.validatePassword(values.password)}));
        }

    }

    const handleSubmit= (e) =>{
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

    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            handleSubmit(event);
        }
    };
    return {handleChange, handleOnCheck,handleSubmit,handleKeyPress, handleOnBlur, values,errors, rememberMe};

}

export default useForm;