import React, { Fragment, useEffect, useState} from 'react';
import flagEn from '../../img/flags/US.svg';
import flagES from '../../img/flags/ES.svg';
import flagFR from '../../img/flags/FR.svg';



const  LanguageSelector = props => {

     const[currentLanguage, setCurrentLanguage]=useState();

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


const handleChange = (event)=>{
    const selectedLocale = event.target.value;
    setCurrentLanguage(selectedLocale);
    props.onGetLanguage({selectedLocale});
}



 return(
     <>
      <Fragment>
          <select id = "dropdown" value={currentLanguage}   onChange={event =>handleChange(event)}>
              {languages.map((language,index)=>{
                  return(
                      <Fragment key={language.id}>
                          <option  value={language.id}>{language.name}</option>
                      </Fragment>

                  );
              })}
          </select>
      </Fragment>
     </>

 );
}
export default LanguageSelector;