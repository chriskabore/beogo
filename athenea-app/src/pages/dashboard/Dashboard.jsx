import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Dashboard = ()=>  {
    useEffect(() => {
        document.title = Constants.DASHBOARD_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <AtheneaBreadCrumbs/>
                    <h3>Dashboard</h3>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Dashboard;