// translation configuration file

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './locales/en/translation';
import translationsES from './locales/es/translation';
import translationsFR from './locales/fr/translation';

export const supportedLanguages =["en","es","fr"];
const resources={
    en:{
        translation: translationsEN
    },
    es:{
        translation: translationsES
    },
    fr:{
        translation:translationsFR
    }
}

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init({
    resources:resources,
    lng:'en',
    fallbackLng:'en',
    ns: "translation",
    defaultNS: "translation",
    supportedLngs: supportedLanguages ,
    debug:true,
    detection:{
        order:['queryString','navigator','cookie'],
        cache:['cookie']},
    interpolation:{escapeValue:false}
});

export  default i18n;