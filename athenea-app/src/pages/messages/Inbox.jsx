import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Inbox = ()=>  {
    useEffect(() => {
        document.title = Constants.INBOX_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Inbox</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Inbox;