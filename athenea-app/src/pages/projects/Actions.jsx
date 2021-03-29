import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Actions = ()=>  {
    useEffect(() => {
        document.title = Constants.ACTIONS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Actions</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Actions;