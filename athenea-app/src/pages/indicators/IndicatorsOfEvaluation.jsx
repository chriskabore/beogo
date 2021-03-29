import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const IndicatorsOfEvaluation = ()=>  {
    useEffect(() => {
        document.title = Constants.INDICATORS_OF_EVALUATION_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Indicators Of Evaluation</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default IndicatorsOfEvaluation;