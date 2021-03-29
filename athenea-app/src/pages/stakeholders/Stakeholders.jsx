import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";

const Stakeholders = ()=>  {
    useEffect(() => {
        document.title = Constants.STAKEHOLDERS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Stakeholders</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Stakeholders;