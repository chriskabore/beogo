import React, {useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import {Trans} from 'react-i18next';
import {useTranslation} from "react-i18next";



const SignIn = () =>{
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.title = Constants.SIGNIN_PAGE_TITLE;
    });
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
                                    <form action="/sign-in" method="post">

                                        <div className="input-group email-input-group shakeable">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                                            </div>
                                            <input id="email-address" type="text" name="email"
                                                   className="form-control input_user" value="" autoFocus="autofocus"
                                                   placeholder={t('login.user-email-placeholder')}/>
                                        </div>
                                        <div className="input-group password-input-group shakeable">
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                                            </div>
                                            <input id="password" type="password" name="password"
                                                   className="form-control input_pass" value="" placeholder="password"
                                                   placeholder={t('login.user-password-placeholder')}/>
                                        </div>
                                        <div className="input-group justify-content-between">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="remember-me"/>
                                                    <label htmlFor="remember-me" className="form-check-label">
                                                      <Trans i18nKey="login.remember-me-text"> Remember me </Trans>
                                                    </label>
                                                    <span></span>
                                            </div>
                                            <div className="password-forgoten">
                                                <a href="/">
                                                  <Trans i18nKey="login.password-forgotten-text">  Password forgotten? </Trans>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="form-group login-button-group">
                                            <div className="login-submit-container">
                                                <input type="submit"
                                                       name="login-submit"
                                                       id="login-submit"
                                                       className="form-control btn btn-primary"
                                                       value={t('login.submit-button-text')}/>
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