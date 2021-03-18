import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const ComposeEmail = ()=>  {
    useEffect(() => {
        document.title = Constants.COMPOSE_EMAIL_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Compose Email</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default ComposeEmail;