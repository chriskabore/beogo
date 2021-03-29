import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const ActionPlans = ()=>  {
    useEffect(() => {
        document.title = Constants.ACTION_PLANS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Action Plans</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default ActionPlans;