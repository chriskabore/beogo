import React, {Component} from 'react';
import {useTranslation} from 'react-i18next';
import Footer from "../../components/layout/Footer";

const Test = props =>  {

        const{t, i18n}=useTranslation();
        const changeLanguage =(language) => {
            i18n.changeLanguage(language);
        };
        return (

            <div>
                <h3>Test</h3>
                <div>
                    <h1>{t('title', {framework:'React'})}</h1>
                    <button onClick={() => changeLanguage('fr')}>fr</button>
                    <button onClick={() => changeLanguage('en')}>en</button>
                </div>
                <Footer/>
            </div>
        );
}


export default Test;