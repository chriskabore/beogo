import React from 'react';
import {Trans} from "react-i18next";
import * as Constants from "../../utils/constants";
import SignUpForm from "../registration/SignUpForm";

const SignUpCard = (props) => {
    return (
        <>
            <div className="col-md-5 mx-auto my-4">
                <div className="card registration-card ">
                    <div className="card-header">
                        <p className="sign-in-text">
                            <Trans i18nKey={Constants.REGISTER_SIGNUP_TEXT_MSG_PROP}>Please fill in this form to create an account!</Trans>
                        </p>
                    </div>
                    <div className="card-body">
                        <SignUpForm {...props}/>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <span><Trans i18nKey={Constants.ALREADY_SIGNED_UP_TEXT_MSG_PROP}> Already have an account?</Trans></span>&nbsp; <a
                        className="signup-text" href={Constants.SIGNIN_PATHNAME}><Trans i18nKey={Constants.SIGNIN_TEXT_MSG_PROP}>Sign
                        up!</Trans></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpCard;