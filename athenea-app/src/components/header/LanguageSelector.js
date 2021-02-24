import React, { Fragment, useEffect, useState} from 'react';
import flagEn from '../../img/flags/US.svg';
import flagES from '../../img/flags/ES.svg';
import flagFR from '../../img/flags/FR.svg';



const  LanguageSelector = props => {

    const defaultLanguage = {
        id:"en",
        title:"English",
        name:"English",
        flagImg: flagEn
    };

     const[currentLanguage, setCurrentLanguage]=useState();
    const [toggleContent, setToggleContent] = useState(<><Fragment><img src={defaultLanguage.flagImg} alt={defaultLanguage.title}/>
        <span className="d-none d-sm-inline-block">{defaultLanguage.name}</span></Fragment></>);

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
    let selectedLanguageLocale = event.currentTarget.getAttribute('data-key');
    setCurrentLanguage(selectedLanguageLocale);
    props.onSelectLanguge(selectedLanguageLocale);
    let selectedLanguage = languages.find(lang =>{return (lang.id === selectedLanguageLocale)});
    setToggleContent(<><Fragment><img src={selectedLanguage.flagImg} alt={selectedLanguage.title}/>
        <span className="d-none d-sm-inline-block">{selectedLanguage.name}</span></Fragment></>);

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