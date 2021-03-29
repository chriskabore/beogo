import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Messages = ()=>  {
    useEffect(() => {
        document.title = Constants.MESSAGES_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Messages</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Messages;