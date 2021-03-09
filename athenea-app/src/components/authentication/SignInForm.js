import React, {Component} from 'react';
import {Trans, useTranslation} from "react-i18next";
import useForm from './../../utils/hooks/useForm';

const SignInForm = (props)=> {
    const { t, i18n } = useTranslation();
    const { handleOnCheck, handleKeyPress,handleSubmit,handleChange, credentials, errors} = useForm(props);

    return (
            <>
                <form className="form" onSubmit={handleSubmit}>
                    <div className={errors.incorrectCredentialsError? 'text-danger' : 'hidden'}>{t(errors.incorrectCredentialsError)}</div>
                    <div className="input-group email-input-group shakeable">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                        </div>
                        <input id="email-address" type="text" name="username" autoFocus={true}
                               className="form-control input_user" defaultValue={credentials.username}
                               onChange={handleChange}
                               placeholder={t('login.user-email-placeholder')} />
                    </div>
                     <div className={errors.emailFieldError? "text-danger" : "hidden"}>{t(errors.emailFieldError)}</div>
                    <div className="input-group password-input-group shakeable">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                        </div>
                        <input id="password" type="password" name="password"
                               className="form-control input_pass" defaultValue={credentials.password}
                               onChange={handleChange}
                               placeholder={t('login.user-password-placeholder')} />
                    </div>
                    <div className={errors.passwordFieldError? "text-danger" : "hidden"}>{t(errors.passwordFieldError)}</div>
                    <div className="input-group justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember-me" name="rememberMe"  value={credentials.rememberMe} onChange={handleOnCheck} />
                            <label htmlFor="remember-me" className="form-check-label">
                                <Trans i18nKey="login.remember-me-text"> Remember me </Trans>
                            </label>
                            <span></span>
                        </div>
                        <div className="password-forgotten">
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
                                   value={t('login.submit-button-text')} />
                        </div>
                    </div>
                </form>
            </>
        );

}

export default SignInForm;