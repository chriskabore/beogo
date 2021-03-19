import React, {Component, useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Settings = () => {
    useEffect(() => {
        document.title = Constants.SETTINGS_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <AtheneaBreadCrumbs/>
                    <h2>Settings</h2>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Settings;