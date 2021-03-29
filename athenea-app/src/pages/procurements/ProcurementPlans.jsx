import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const ProcurementPlans = ()=>  {
    useEffect(() => {
        document.title = Constants.PROCUREMENT_PLANS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>ProcurementPlans</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default ProcurementPlans;