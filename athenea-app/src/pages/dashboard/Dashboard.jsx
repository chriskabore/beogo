import React, {Component, useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";

const Dashboard = ()=>  {
    useEffect(() => {
        document.title = Constants.DASHBOARD_PAGE_TITLE;
    });
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h3>Dashboard</h3>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Dashboard;