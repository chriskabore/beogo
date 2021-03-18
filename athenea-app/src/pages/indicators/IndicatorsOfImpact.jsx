import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const IndicatorsOfImpact = ()=>  {
    useEffect(() => {
        document.title = Constants.INDICATORS_OF_IMPACT_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Indicators Of Impact</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default IndicatorsOfImpact;