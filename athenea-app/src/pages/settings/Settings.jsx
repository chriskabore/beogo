import React, {Component, useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";


const Settings = () => {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    useEffect(() => {
        document.title = Constants.SETTINGS_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h2>Settings</h2>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Settings;