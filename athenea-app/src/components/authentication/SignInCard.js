import React, {Component} from 'react';
import {Trans} from "react-i18next";
import SignInForm from "./SignInForm";

const SignInCard = (props) => {
    return (
            <>
                <div className="col-md-5 mx-auto my-4">
                    <div className="card login-card ">
                        <div className="card-header">
                            <p className="sign-in-text">
                                <Trans i18nKey="login.signin-text">Sign in to your account</Trans>
                            </p>
                        </div>
                        <div className="card-body">
                            <SignInForm {...props}/>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <span><Trans i18nKey="login.no-account-text"> Don't have an account?</Trans></span>&nbsp; <a
                            className="signup-text" href="/"><Trans i18nKey="auth.sign-up">Sign
                            up!</Trans></a>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default SignInCard;