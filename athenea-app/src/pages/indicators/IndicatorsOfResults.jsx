import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const IndicatorsOfResult = ()=>  {
    useEffect(() => {
        document.title = Constants.INDICATORS_OF_RESULT_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Indicators Of Result</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default IndicatorsOfResult;