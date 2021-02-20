import React, {useState, Fragment, useEffect} from 'react';
import flagEn from '../../img/flags/US.svg';
import flagES from '../../img/flags/ES.svg';
import flagFR from '../../img/flags/FR.svg';
import i18n from '../../i18n/i18n';

import * as Constants from "../../utils/constants";
import {useTranslation} from "react-i18next";


function LanguageSelector(){

    const defaultLanguage="English";
    const[currentLanguage,setCurrentLanguage]=useState(defaultLanguage);

    const languages = [
        {
            id:"en",
            title:"English",
            name:"English",
            flagImg: flagEn
        },
        {
            id:"es",
            title:"Spanish",
            name:"Español",
            flagImg: flagES
        },{
            id:"fr",
            title:"French",
            name:"Français",
            flagImg:flagFR

        }
    ];

    const handleChangeLanguage =(event)=>{
        setCurrentLanguage(event.target.value);
        const selectLanguage = languages.find((item)=>item.title===event.target.value);
        const selectLocale = selectLanguage.id;
        console.log(selectLocale);

    }



 return(
     <>
      <Fragment>
          <select id = "dropdown" value={currentLanguage}  defaultValue={currentLanguage} onChange={(event)=>handleChangeLanguage(event)}>
              {languages.map((language,index)=>{
                  return(
                      <option value={language.title}>{language.name}</option>
                  );
              })}
          </select>
      </Fragment>
     </>

 );
}
export default LanguageSelector;