import React from 'react';
import {useTranslation} from "react-i18next";

const defaultLocale='en';
let userSelectedLocale='';

const Lang = (locale)=>{
    const {i18n} = useTranslation();
    userSelectedLocale=locale;
    i18n.changeLanguage(locale);
}

export default Lang;