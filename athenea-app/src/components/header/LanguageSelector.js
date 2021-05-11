import React, { Fragment, useEffect, useState} from 'react';
import flagEn from '../../img/flags/US.svg';
import flagES from '../../img/flags/ES.svg';
import flagFR from '../../img/flags/FR.svg';
import usePrevious from "../../utils/hooks/usePrevious";



const  LanguageSelector = props => {


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

    const defaultLanguage = {
        id:"en",
        title:"English",
        name:"English",
        flagImg: flagEn
    };

    let userPreferredLanguage = localStorage.getItem("i18nextLng");
    let userLocalPreferredLanguage = localStorage.getItem("currentLanguage");

    const[currentLanguage, setCurrentLanguage]=useState(userLocalPreferredLanguage ? userLocalPreferredLanguage:(userPreferredLanguage ? userPreferredLanguage:defaultLanguage.id));



    useEffect(() => {

        if(userPreferredLanguage && userLocalPreferredLanguage){

            if(userPreferredLanguage.localeCompare(userLocalPreferredLanguage)==0){
                localStorage.setItem("currentLanguage", userLocalPreferredLanguage)
                console.log("selected language is user local lang: {}",userLocalPreferredLanguage);
            }else{
                localStorage.setItem("currentLanguage", userLocalPreferredLanguage)
                console.log("selected language is user pref lang: {}",userPreferredLanguage);
            }
        } else{
            localStorage.setItem("currentLanguage", defaultLanguage)
            console.log("selected language is default lang: {}",defaultLanguage);
        }

    });





    let selectedLanguage = languages.find(lang =>{return (lang.id === currentLanguage)});

    const [toggleContent, setToggleContent] = useState(<><Fragment><img src={selectedLanguage.flagImg} alt={selectedLanguage.title} className="mr-2"/>
        <span>{selectedLanguage.name}</span></Fragment></>);




const handleChange = (event)=>{
    let selectedLanguageLocale = event.currentTarget.getAttribute('data-key');
    setCurrentLanguage(selectedLanguageLocale);
    props.onSelectLanguge(selectedLanguageLocale);
    let selectedLanguage = languages.find(lang =>{return (lang.id === selectedLanguageLocale)});
    setToggleContent(<><Fragment><img src={selectedLanguage.flagImg} alt={selectedLanguage.title} className="mr-2"/>
        <span>{selectedLanguage.name}</span></Fragment></>);

}



 return(
     <>
      <Fragment>
          <a id="selected-language" rel="nofollow" data-target="#" href="#"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
             className="nav-link language dropdown-toggle">
              {toggleContent}
          </a>
          <ul aria-labelledby="languages" className="language-dropdown-menu dropdown-menu">
              {languages.map((language, index) =>{
                  return(
                      <li key={language.id} data-key={language.id} onClick={handleChange}>
                          <a rel="nofollow" href="#" className="language-dropdown-item dropdown-item" >
                              <img src={language.flagImg} alt={language.title} className="mr-2"/>
                              <span>{language.name}</span>
                          </a>
                      </li>
                  )
              })}
          </ul>
      </Fragment>
     </>

 );
}
export default LanguageSelector;