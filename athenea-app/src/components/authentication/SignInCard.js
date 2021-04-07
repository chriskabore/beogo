import React from 'react';
import {Trans} from "react-i18next";
import SignInForm from "./SignInForm";
import * as Constants from "../../utils/constants";

const SignInCard = (props) => {
    return (
            <>
                <div className="col-md-5 mx-auto my-4">
                    <div className="card login-card ">
                        <div className="card-header">
                            <p className="sign-in-text">
                                <Trans i18nKey={Constants.SIGNIN_TEXT_MSG_PROP}>Sign in to your account</Trans>
                            </p>
                        </div>
                        <div className="card-body">
                            <SignInForm {...props}/>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <span><Trans i18nKey={Constants.NO_ACCOUNT_TEXT_MSG_PROP}> Don't have an account?</Trans></span>&nbsp; <a
                            className="signup-text" href={Constants.HOME_PATHNAME}><Trans i18nKey={Constants.SIGNUP_TEXT_MSG_PROP}>Sign
                            up!</Trans></a>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default SignInCard;