import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const ActionPlans = ()=>  {
    useEffect(() => {
        document.title = Constants.ACTION_PLANS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Action Plans</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default ActionPlans;