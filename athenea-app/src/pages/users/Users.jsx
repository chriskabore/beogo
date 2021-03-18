import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Users = ()=>  {
    useEffect(() => {
        document.title = Constants.USERS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Users</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Users;