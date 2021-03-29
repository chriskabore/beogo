import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Permissions = ()=>  {
    useEffect(() => {
        document.title = Constants.PERMISSIONS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Permissions</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Permissions;