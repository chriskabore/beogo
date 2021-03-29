import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Dashboard = ()=>  {
    useEffect(() => {
        document.title = Constants.DASHBOARD_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h4>Dashboard</h4>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Dashboard;