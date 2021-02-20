// translation configuration file

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLanguages =["en","fr","es"];


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng:'en',
    ns: ["translation"],
    defaultNS: "translation",
    supportedLngs: supportedLanguages ,
    debug:true,
    detection:{
        order:['queryString','cookie'],
        cache:['cookie']},
    interpolation:{escapeValue:false}
});

export  default i18n;