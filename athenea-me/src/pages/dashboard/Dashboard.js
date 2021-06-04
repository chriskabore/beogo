import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import * as Constant from '../../helpers/constants/index';
import AuthenticatedPageLayout from "../../layouts/AuthenticatedPageLayout";

const Dashboard = (props) => {

    const { t } = useTranslation(Constant.TRANSLATION_PARAM);

    useEffect(() => {
        document.title = Constant.DASHBOARD_PAGE_TITLE;
    });

    return (
        <>
            <AuthenticatedPageLayout>
                <h4>Dashboard</h4>
            </AuthenticatedPageLayout>
        </>
    );

}

export default Dashboard;