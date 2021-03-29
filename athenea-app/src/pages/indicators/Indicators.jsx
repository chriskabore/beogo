import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Indicators = ()=>  {
    useEffect(() => {
        document.title = Constants.INDICATORS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Indicators</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Indicators;