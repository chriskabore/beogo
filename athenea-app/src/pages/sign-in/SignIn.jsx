import React, {useEffect,useState} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import {Trans} from 'react-i18next';
import {useTranslation} from "react-i18next";
import Auth from '../../utils/athentication/Auth';
import Validator from '../../utils/validations/Validator';
import {ROLE_ADMIN} from "../../utils/constants";
import {Redirect} from 'react-router-dom';



const SignIn = (props) =>{

    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [state , setState] = useState({
        email : "",
        password : "",
        rememberMe: false,
        errors:[]
    });

    useEffect(() => {
        document.title = Constants.SIGNIN_PAGE_TITLE;
    });

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(state.email);
        console.log(state.password);
        let userInfo = Auth.authenticate(state.email, state.password, state.rememberMe);
        console.log(userInfo);
        if(userInfo.errors){
            if(userInfo.errors.length > 0){
                let loginErrors = [];
                console.log('there are some errors...');
                userInfo.errors.map((error,index)=>{
                    loginErrors.push(error);
                    setState({errors:loginErrors});;
                    setShow(true);
                })
            }
        }

        if (userInfo.isSignedIn){
            localStorage.setItem('username',userInfo.name);
            localStorage.setItem('userPosition',userInfo.position);
            localStorage.setItem('isAuthenticated', true);
            if (userInfo.role===ROLE_ADMIN){
                localStorage.setItem('isAuthorized', true);
            }
            window.location.href="/dashboard";
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setShow(false);
        setState(prevState => ({
            ...prevState,
            [name]:value
        }));
        //resetErrors();
    }

    const displayErrors = () =>{
        let isError = false;
        if(state.errors){
            if(state.errors.length > 0){
               isError = true;
            }
        }
        if(isError){
            return(
                <div className="errors alert alert-danger">
                    {state.errors.map((error, index) =>{
                        if(error.i18nKey==='validation.field-is-required-text'){
                            return ( <p key={`error-${index}`}>{t(`${error.i18nKey}`,{name: error.fieldName})}</p>)
                        }else{
                            return ( <p key={`error-${index}`}>{t(`${error.i18nKey}`)}</p>)
                        }

                    }

                    )}
                </div>
            );
        }else {return;}

    }


   const validateUsernameOnBlur =(event) =>{
       const {name, value} = event.target;
        const username = value;
        let errors = state.errors;
        let error = Validator.validateNotEmpty(name,username);
        if(error){
            setShow(true);
            errors.push(error);
            setState({username,errors});
        }
        if(username.length>0){
           error = Validator.validateEmailFormat(name,username);
           if(error){
               errors.push(error);
               setState({username,errors});
               setShow(true);
           }
        }
        setShow(show|| state.errors.length>0);
    }

    const validatePasswordOnBlur =(event) =>{
        const {name, value} = event.target;
        const password = value;
        let errors = state.errors;
        let error = Validator.validateNotEmpty(name, password);
        if(error){
            errors.push(error);
            setShow(true);
            setState({ password, errors });
        }

        setShow(show|| state.errors.length>0);
    }

    const resetErrors= ()=>{
        setState({errors: []});
    }

    const handleOnCheck = () =>{
        state.rememberMe=true;
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            submitForm(event);
        }
    };

    return (
            <>
                <PublicPagesLayout>
                    <div className="row login-card-row">
                        <div className="col-md-5 mx-auto my-4">
                            <div className="card login-card ">
                                <div className="card-header">
                                    <p className="sign-in-text">
                                       <Trans i18nKey="login.signin-text">Sign in to your account</Trans>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        {displayErrors(show)}
                                        <div className="input-group email-input-group shakeable">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                                            </div>
                                            <input id="email-address" type="text" name="email" autoFocus={true}
                                                   className="form-control input_user"
                                                   placeholder={t('login.user-email-placeholder')} onChange={handleChange} onBlur={validateUsernameOnBlur}/>
                                        </div>
                                        <div className="input-group password-input-group shakeable">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                                            </div>
                                            <input id="password" type="password" name="password"
                                                   className="form-control input_pass"
                                                   placeholder={t('login.user-password-placeholder')} onChange={handleChange} onBlur={validatePasswordOnBlur}/>
                                        </div>
                                        <div className="input-group justify-content-between">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="remember-me" onChange={handleOnCheck}/>
                                                    <label htmlFor="remember-me" className="form-check-label">
                                                      <Trans i18nKey="login.remember-me-text"> Remember me </Trans>
                                                    </label>
                                                    <span></span>
                                            </div>
                                            <div className="password-forgoten">
                                                <a href="/">
                                                  <Trans i18nKey="login.password-forgotten-text"> Password forgotten? </Trans>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="form-group login-button-group">
                                            <div className="login-submit-container">
                                                <input type="submit"
                                                       name="login-submit"
                                                       id="login-submit"
                                                       className="form-control btn btn-primary"
                                                       value={t('login.submit-button-text')} onClick={submitForm}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <span><Trans i18nKey="login.no-account-text"> Don't have an account?</Trans></span>&nbsp; <a
                                    className="signup-text" href="/"><Trans i18nKey="auth.sign-up">Sign
                                    up!</Trans></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </PublicPagesLayout>
            </>
        );

}

export default SignIn;