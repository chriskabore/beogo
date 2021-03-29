import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Activities = ()=>  {
    useEffect(() => {
        document.title = Constants.ACTIVITIES_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Activities</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Activities;