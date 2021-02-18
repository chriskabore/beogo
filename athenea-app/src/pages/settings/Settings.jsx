import React, {Component, useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";

const Settings = () => {
    useEffect(() => {
        document.title = Constants.SETTINGS__PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h2>settigns</h2>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Settings;