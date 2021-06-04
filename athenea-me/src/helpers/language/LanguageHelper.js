import React from 'react';
import i18n from '../../i18n/i18n';

export const changeLanguage = (languageLocale) =>{
    if(languageLocale){
        i18n.changeLanguage(languageLocale);
    }
}

export const getBrowserLanguage = () => {
    const browserLocale = window.navigator.language;
    const browserLocales = navigator.languages;
    const browserLanguage = (browserLocales && browserLocales[0])||browserLocale;
    return browserLanguage;

}