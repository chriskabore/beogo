import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../../utils/constants";


const UserProfile = ()=>  {
    useEffect(() => {
        document.title = Constants.USERS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>User Profile</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default UserProfile;