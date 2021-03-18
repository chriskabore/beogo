import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const ProcurementPlans = ()=>  {
    useEffect(() => {
        document.title = Constants.PROCUREMENT_PLANS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>ProcurementPlans</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default ProcurementPlans;