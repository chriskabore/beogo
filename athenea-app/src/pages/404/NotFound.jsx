import React, {useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from '../../utils/constants';
import {useTranslation} from "react-i18next";


const NotFound = props => {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);

    useEffect(() => {
        document.title = Constants.NOTFOUND_PAGE_TITLE;
    });

    return(
        <>
            <PublicPagesLayout>
                <h2>404 Not Found</h2>
            </PublicPagesLayout>
        </>

    );
}

export default NotFound;