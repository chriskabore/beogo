import React, {Component, useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";

const Preferences = () =>  {
    useEffect(() => {
        document.title = Constants.SETTINGS__PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h3>Preferences</h3>
                </AuthenticatedPagesLayout>
            </>
        );
}

export default Preferences;