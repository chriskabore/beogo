import React, {useEffect} from 'react';
import PublicPageLayout from "../../layouts/PublicPageLayout";
import {withTranslation} from "react-i18next";
import * as Constant from '../../helpers/constants/index';
import {useHistory} from 'react-router-dom';
import SignInCard from "../../components/sign-in/SignInCard";
import SignInForm from "../../components/sign-in/SignInForm";



const SignIn = (props)=>  {

    let history = useHistory();

    let landingPagePath = Constant.DASHBOARD_PATHNAME;

    useEffect(() => {
        document.title = Constant.SIGN_IN_PAGE_TITLE;
    });

        return (
            <PublicPageLayout>
                <SignInCard>
                    <SignInForm history={history} landingPagePath={landingPagePath} {...props}/>
                </SignInCard>
            </PublicPageLayout>
        );

}

export default withTranslation(Constant.TRANSLATION_PARAM)(SignIn);