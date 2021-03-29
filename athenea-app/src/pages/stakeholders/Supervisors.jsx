import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Supervisors = ()=>  {
    useEffect(() => {
        document.title = Constants.SUPERVISORS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Supervisors</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Supervisors;