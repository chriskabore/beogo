import React from 'react';
import {Trans} from "react-i18next";
import * as Constant from '../../helpers/constants/index';

const SignInCard = ({children}) =>  {
    return (
        <>
            <div className="col-md-5 mx-auto my-4">
                <div className="card login-card ">
                    <div className="card-header">
                        <p className="sign-in-text">
                            <Trans i18nKey={Constant.SIGN_IN_TEXT_MSG_PROP}>Sign in to your account</Trans>
                        </p>
                    </div>
                    <div className="card-body">
                        {children}
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <span><Trans i18nKey={Constant.NO_ACCOUNT_TEXT_MSG_PROP}> Don't have an account?</Trans></span>&nbsp; <a
                        className="signup-text" href={Constant.SIGN_UP_PATHNAME}><Trans i18nKey={Constant.SIGN_UP_TEXT_MSG_PROP}>Sign
                        up!</Trans></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInCard;