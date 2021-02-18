import React, {useState} from 'react';
import frenchFlag from "../../img/flags/FR.png";
import englishFlag from "../../img/flags/GB.png";
import {useTranslation} from "react-i18next";
import $ from 'jquery';

function  LanguageSelector()  {

     const{t, i18n}=useTranslation();
     const changeLanguage =(language) => {
        i18n.changeLanguage(language);
     };



     const handleLanguageChange = (evt) =>{
        console.log('cilcked language selector!');
     }

     return (
            <div>
                <li className="nav-item dropdown">
                    <a id="selected-language" rel="nofollow" data-target="#" href="#"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                       className="nav-link language dropdown-toggle">
                        <img src={frenchFlag} alt="French"/>
                        <span className="d-none d-sm-inline-block">Français</span>
                    </a>
                    <ul aria-labelledby="languages"
                        className="language-dropdown-menu dropdown-menu">
                        <li>
                            <a rel="nofollow" href="#"
                               className="language-dropdown-item dropdown-item" onClick={(e)=>handleLanguageChange()}>
                                <img src={englishFlag} alt="English" className="mr-2"/>
                                <span>English</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </div>
        );

}

export default LanguageSelector;