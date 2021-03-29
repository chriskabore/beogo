import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Sent = ()=>  {
    useEffect(() => {
        document.title = Constants.SENT_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Sent</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Sent;