import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";


const Sent = ()=>  {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    useEffect(() => {
        document.title = Constants.SENT_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Sent</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Sent;