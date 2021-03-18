import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../../utils/constants";
import AtheneaBreadCrumbs from "../../../components/header/AtheneaBreadCrumbs";

const UserPreferences = () =>  {
    useEffect(() => {
        document.title = Constants.PREFERENCES_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <AtheneaBreadCrumbs/>
                    <h3>User Preferences</h3>
                </AuthenticatedPagesLayout>
            </>
        );
}

export default UserPreferences;