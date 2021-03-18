import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Budgets = ()=>  {
    useEffect(() => {
        document.title = Constants.BUDGETS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Budgets</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Budgets;