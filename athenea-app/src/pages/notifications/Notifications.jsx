import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Notifications = ()=>  {
    useEffect(() => {
        document.title = Constants.NOTIFICATIONS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Notifications</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Notifications;