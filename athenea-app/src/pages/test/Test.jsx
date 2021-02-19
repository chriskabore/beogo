import React from 'react';
import {useTranslation} from "react-i18next";
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";


const Test = () =>  {
    const { t, i18n } = useTranslation();
    const changeLanguage =(language) => {
        i18n.changeLanguage(language);
    };
        return (
            <>
                <PublicPagesLayout>
                   <p className="paragraph animate__animated animate__bounce">{t('title')}</p>
                    <button className="btn btn-primary m-2" onClick={() => changeLanguage('en')}>english</button>
                    <button className="btn btn-primary m-2" onClick={() => changeLanguage('es')}>spanish</button>
                    <button className="btn btn-primary m-2" onClick={() => changeLanguage('fr')}>french</button>
                </PublicPagesLayout>
            </>
        );

}

export default Test;