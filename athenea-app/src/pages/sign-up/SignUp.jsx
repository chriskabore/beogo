import React, {Component, useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";

const SignUp = () =>  {

    useEffect(() => {
        document.title = Constants.SIGNUP_PAGE_TITLE;
    });
        return (
            <>
                <PublicPagesLayout>
                    <h2>Sign Up</h2>
                </PublicPagesLayout>

            </>
        );
}

export default SignUp;