import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";


const Dashboard = ()=>  {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);


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