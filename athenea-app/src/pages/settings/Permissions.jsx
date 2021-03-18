import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Permissions = ()=>  {
    useEffect(() => {
        document.title = Constants.PERMISSIONS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Permissions</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Permissions;