import React, {Component} from 'react';
import {Trans, useTranslation} from "react-i18next";
import useForm from './../../utils/hooks/useForm';
import * as Constants from "../../utils/constants";




const SignInForm = (props)=> {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    const { handleOnRememberMe,handleSignInSubmit,handleSignInFieldChange,handleOnBlur, credentials, errors} = useForm(props);

    return (
            <>

                <form className="form" onSubmit={handleSignInSubmit}>
                    <div className={errors.incorrectCredentialsError? 'alert alert-danger text-align-center mb-5 error-msg' : 'hidden'}>{t(errors.incorrectCredentialsError)}</div>
                    <div className="input-group email-input-group shakeable">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                        </div>
                        <input id="email-address" type="text" name="username" autoFocus={true}
                               className="form-control input_user" defaultValue={credentials.username}
                               onChange={handleSignInFieldChange}
                               placeholder={t(Constants.EMAIL_PLACEHOLDER_MSG_PROP)}
                                onBlur={handleOnBlur}/>
                    </div>
                     <div className={errors.emailFieldError? 'alert alert-danger mb-5 error-msg' : 'hidden'}>{t(errors.emailFieldError)}</div>
                    <div className="input-group password-input-group shakeable">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                        </div>
                        <input id="password" type="password" name="password"
                               className="form-control input_pass" defaultValue={credentials.password}
                               onChange={handleSignInFieldChange}
                               placeholder={t(Constants.PASSWORD_PLACEHOLDER_MSG_PROP)}
                               onBlur={handleOnBlur}
                        />
                    </div>
                    <div className={errors.passwordFieldError? "alert alert-danger mb-3 error-msg" : "hidden"}>{t(errors.passwordFieldError)}</div>
                    <div className="input-group justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember-me" name="rememberMe"  value={credentials.rememberMe} onChange={handleOnRememberMe} />
                            <label htmlFor="remember-me" className="form-check-label">
                                <Trans i18nKey={Constants.REMEMBER_ME_TEXT_MSG_PROP}> Remember me </Trans>
                            </label>
                            <span></span>
                        </div>
                        <div className="password-forgotten">
                            <a href="/">
                                <Trans i18nKey={Constants.PASSWORD_FORGOTTEN_TEXT_MSG_PROP}> Password forgotten? </Trans>
                            </a>
                        </div>
                    </div>
                    <div className="form-group login-button-group">
                        <div className="login-submit-container">
                            <input type="submit"
                                   name="login-submit"
                                   id="login-submit"
                                   className="form-control btn btn-primary"
                                   value={t(Constants.SIGNIN_BUTTON_TEXT_MSG_PROP)}/>
                        </div>
                    </div>
                </form>
            </>
        );

}

export default SignInForm;