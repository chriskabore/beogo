import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";

const Budgets = ()=>  {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);
    useEffect(() => {
        document.title = Constants.BUDGETS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Budgets</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Budgets;