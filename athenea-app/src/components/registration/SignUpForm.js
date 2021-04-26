import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import useForm from './../../utils/hooks/useForm';
import * as Constants from "../../utils/constants";





const SignUpForm = (props)=> {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    const { handleOnAgreedToTerms,handleSignUpSubmit,handleSignUpFieldChange,handleSignUpOnBlur, registrationData, errors} = useForm(props);

    return (
        <>

            <form className="form" onSubmit={handleSignUpSubmit}>
                <div className="input-group first-name-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                    </div>
                    <input id="first-name" type="text" name="firstName" autoFocus={true}
                           className="form-control input_user" defaultValue={registrationData.firstName}
                           onChange={handleSignUpFieldChange}
                           placeholder={t(Constants.FIRSTNAME_PLACEHOLDER_MSG_PROP)}
                           onBlur={handleSignUpOnBlur}/>
                </div>
                <div className={errors.firstNameFieldError? 'alert alert-danger mb-5 error-msg' : 'hidden'}>{t(errors.firstNameFieldError)}</div>
                <div className="input-group last-name-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-user fa-lg"></i></span>
                    </div>
                    <input id="last-name" type="text" name="lastName" autoFocus={false}
                           className="form-control input_user" defaultValue={registrationData.lastName}
                           onChange={handleSignUpFieldChange}
                           placeholder={t(Constants.LASTNAME_PLACEHOLDER_MSG_PROP)}
                           onBlur={handleSignUpOnBlur}/>
                </div>
                <div className={errors.lastNameFieldError? 'alert alert-danger mb-5 error-msg' : 'hidden'}>{t(errors.lastNameFieldError)}</div>
                <div className="input-group email-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-envelope fa-lg"></i></span>
                    </div>
                    <input id="email-address" type="text" name="username" autoFocus={false}
                           className="form-control input_user" defaultValue={registrationData.username}
                           onChange={handleSignUpFieldChange}
                           placeholder={t(Constants.EMAIL_PLACEHOLDER_MSG_PROP)}
                           onBlur={handleSignUpOnBlur}/>
                </div>
                <div className={errors.emailFieldError? 'alert alert-danger mb-5 error-msg' : 'hidden'}>{t(errors.emailFieldError)}</div>
                <div className="input-group password-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                    </div>
                    <input id="password" type="password" name="password"
                           className="form-control input_pass" defaultValue={registrationData.password}
                           onChange={handleSignUpFieldChange}
                           placeholder={t(Constants.PASSWORD_PLACEHOLDER_MSG_PROP)}
                           onBlur={handleSignUpOnBlur}
                    />
                </div>
                <div className={errors.passwordFieldError? "alert alert-danger mb-3 error-msg" : "hidden"}>{t(errors.passwordFieldError)}</div>
                <div className="input-group confirm-password-input-group shakeable">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key fa-lg"></i></span>
                    </div>
                    <input id="confirm-password" type="password" name="confirmPassword"
                           className="form-control input_pass" defaultValue={registrationData.confirmPassword}
                           onChange={handleSignUpFieldChange}
                           placeholder={t(Constants.CONFIRM_PASSWORD_PLACEHOLDER_MSG_PROP)}
                           onBlur={handleSignUpOnBlur}
                    />
                </div>
                <div className={errors.confirmPasswordFieldError? "alert alert-danger mb-3 error-msg" : "hidden"}>{t(errors.confirmPasswordFieldError)}</div>
                <div className={errors.nonIdenticalPasswordError? 'alert alert-danger text-align-center mb-5 error-msg' : 'hidden'}>{t(errors.nonIdenticalPasswordError)}</div>
                <div className="input-group justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="agreed-to-terms" name="agreedToTermsOfUse"  value={registrationData.agreedToTermsOfUse} onChange={handleOnAgreedToTerms} />
                        <label htmlFor="agreed-to-terms" className="form-check-label">
                            <Trans i18nKey={Constants.AGREED_TO_TEXT_MSG_PROP}> </Trans><a className="terms-and-conditions-link ml-1" href="Constants.TERMS_AND_CONDITIONS_PATHNAME"><Trans i18nKey={Constants.TERMS_AND_CONDITIONS_TEXT_MSG_PROP}></Trans></a>
                        </label>
                        <span></span>
                    </div>
                </div>
                <div className={errors.agreedToTermsCheckError? "alert alert-danger mb-3 error-msg" : "hidden"}>{t(errors.agreedToTermsCheckError)}</div>
                <div className="form-group registration-button-group">
                    <div className="login-submit-container">
                        <input type="submit"
                               name="registration-submit"
                               id="registration-submit"
                               className="form-control btn btn-primary"
                               value={t(Constants.REGISTER_BUTTON_TEXT_MSG_PROP)}/>
                    </div>
                </div>
            </form>
        </>
    );

}

export default SignUpForm;