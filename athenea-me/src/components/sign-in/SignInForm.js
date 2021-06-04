import React, {useState} from 'react';
import * as Constant from '../../helpers/constants/index';
import * as FaIcons from 'react-icons/fa';
import {Trans, useTranslation} from 'react-i18next';
import {clearErrors, validateUserName,validatePassword,shakeElement, markElementAsValid} from "../../helpers/validations/FormInPutsValidator";
import {storeUserSessionData, authenticateUser} from "../../services/AuthenticationService";

const SignInForm = (props) => {
    const {t} = useTranslation(Constant.TRANSLATION_PARAM);

    let defaultState = {
        username:'',
        password:'',
        isSignInFormValid:false,
        rememberMe:false
    };

    const[state, setState] = useState(defaultState);
    const [errors,setErrors]= useState({});

    const handleOnChange = (e)=>{
        setErrors({});
        clearErrors();
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErrors({});
        clearErrors();
        let userNameError = validateUserName(state.username);
        let passwordError = validatePassword(state.password);

        if(userNameError || passwordError){
            state.isSignInFormValid=false;
            setErrors(prevState => ({...prevState,
                ["emailFieldError"]: userNameError}));

            setErrors(prevState => ({...prevState,
                ["passwordFieldError"]: passwordError}));

            if(userNameError){
                shakeElement('#email-address');
            }
            if(passwordError){
                shakeElement('#password');
            }

        }else{
            if(Object.keys(errors).length === 0){
                state.isSignInFormValid=true;
            }
        }


        if(state.isSignInFormValid){
            console.log('form validated....');
            let isUserAuthenticated = false;
            let badCredentialsError = 'validation.incorrect-email-address-or-password-text';
            let signInData = {
                emailAddress: state.username,
                password: state.password,
                rememberMe: state.rememberMe
            };
            let userAuthToken  = await authenticateUser(signInData);
            if( userAuthToken && Object.keys(userAuthToken).length>0 && userAuthToken.accessToken){
                storeUserSessionData(userAuthToken);
                isUserAuthenticated = true;
            }
            if(isUserAuthenticated){
                let history = props.history;
                let pathToLandingPage = props.landingPagePath;
                redirectToLandingPage(history, pathToLandingPage);
            }else{
                console.error("something went wrong while authenticating user: " + state.username);
                state.isSignInFormValid=false;
                setErrors(prevState => ({...prevState,
                    ["incorrectCredentialsError"]: badCredentialsError}));
            }

        }
    }

    const validateEmailOnBlur = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
         let userNameError ="";
         userNameError = validateUserName(value);
         if(!userNameError || ""===userNameError){
             state.isSignInFormValid=true;
             setErrors(prevState => ({...prevState,
                 ["emailFieldError"]: ""}));
             markElementAsValid('#email-address');
         }else{
             shakeElement('#email-address');
             state.isSignInFormValid=false;
             setErrors(prevState => ({...prevState,
                 ["emailFieldError"]: userNameError}));
         }
    }

    const validatePasswordOnBlur = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
         let passwordError="";
         passwordError= validatePassword(value);
         if(!passwordError || ""===passwordError){
             state.isSignInFormValid=true;
             setErrors(prevState => ({...prevState,
                 ["passwordFieldError"]: ""}));
             markElementAsValid('#password');
         }else{
             shakeElement('#password');
             state.isSignInFormValid=false;
             setErrors(prevState => ({...prevState,
                 ["passwordFieldError"]: passwordError}));
         }

    }

    const handleOnRememberMe = (e)=>{
        state.rememberMe = !state.rememberMe;
    }


    const redirectToLandingPage = (history, pathToLandingPage)=>{
        history.push(pathToLandingPage);
    }

    return (
        <>
            <div className={errors.incorrectCredentialsError? 'alert alert-danger text-align-center mb-5 error-msg' : 'hidden'}>{t(errors.incorrectCredentialsError)}</div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group email-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><FaIcons.FaUser className="icon-lg"/></span>
                    </div>
                    <input id="email-address" type="text" name="username" autoFocus={true}
                           className="form-control input_user"
                           onChange={handleOnChange}
                           placeholder={t(Constant.EMAIL_PLACEHOLDER_MSG_PROP)}
                           onBlur={validateEmailOnBlur}
                    />
                </div>
                <div className={errors.emailFieldError? ' text-danger error-msg' : 'hidden'}>{t(errors.emailFieldError)}</div>
                <div className="input-group password-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><FaIcons.FaKey className="icon-lg"/></span>
                    </div>
                    <input id="password" type="password" name="password"
                           className="form-control input_pass"
                           onChange={handleOnChange}
                           placeholder={t(Constant.PASSWORD_PLACEHOLDER_MSG_PROP)}
                           onBlur={validatePasswordOnBlur}

                    />
                </div>
                <div className={errors.passwordFieldError? "text-danger error-msg" : "hidden"}>{t(errors.passwordFieldError)}</div>
                <div className="input-group justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="remember-me" name="rememberMe"  value={state.rememberMe} onChange={handleOnRememberMe} />
                        <label htmlFor="remember-me" className="form-check-label">
                            <Trans i18nKey={Constant.REMEMBER_ME_TEXT_MSG_PROP}> Remember me </Trans>
                        </label>
                        <span></span>
                    </div>
                    <div className="password-forgotten">
                        <a href="/">
                            <Trans i18nKey={Constant.PASSWORD_FORGOTTEN_TEXT_MSG_PROP}> Password forgotten? </Trans>
                        </a>
                    </div>
                </div>
                <div className="form-group login-button-group">
                    <div className="login-submit-container">
                        <input type="submit"
                               name="login-submit"
                               id="login-submit"
                               className="form-control btn btn-primary"
                               value={t(Constant.SIGN_IN_BUTTON_TEXT_MSG_PROP)}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignInForm;