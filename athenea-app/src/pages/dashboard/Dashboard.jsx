import React, {Component} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";

const Dashboard = ()=>  {
        return (
            <>
                <AuthenticatedPagesLayout>
                    <h3>Dashboard</h3>
                </AuthenticatedPagesLayout>
            </>
        );

}

export default Dashboard;