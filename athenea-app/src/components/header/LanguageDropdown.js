import React, {Fragment, useState} from 'react';
import flagEn from "../../img/flags/US.svg";
import flagES from "../../img/flags/ES.svg";
import flagFR from "../../img/flags/FR.svg";
import { Dropdown } from 'react-bootstrap';
const LanguageDropdown = props =>  {
    const defaultLanguage = {
        id:"en",
        title:"English",
        name:"English",
        flagImg: flagEn
    };
    const[currentLanguage, setCurrentLanguage]=useState();
    const [toggleContent, setToggleContent] = useState(<><Fragment> <Dropdown.Item  key={defaultLanguage.id} eventKey={defaultLanguage.id} className="language-dropdown-item">
        <img src={defaultLanguage.flagImg} className="mr-2"/>
        <span>{defaultLanguage.name}</span>
    </Dropdown.Item></Fragment></>);


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


    const handleSelect = (event)=>{
        const selectedLocale = event;
        setCurrentLanguage(selectedLocale);
        let selectedLanguage = languages.find(lang =>{return (lang.id === selectedLocale)});
        console.log(selectedLanguage);
        setToggleContent(<><Fragment> <Dropdown.Item  key={selectedLanguage.id} eventKey={selectedLanguage.id} className="language-dropdown-item">
            <img src={selectedLanguage.flagImg} className="mr-2"/>
            <span>{selectedLanguage.name}</span>
        </Dropdown.Item></Fragment></>);
        props.onSelectLanguge({selectedLocale});
        console.log(event);
    }


    return (
            <>
                <Fragment>
                    <Dropdown onSelect={handleSelect} className="nav-item dropdown">
                        <Dropdown.Toggle variant="none" id="selected-language" className="language">{toggleContent}</Dropdown.Toggle>
                        <Dropdown.Menu className="language-dropdown-menu">
                            {languages.map((language,index)=>{
                                return(
                                    <Fragment key={language.id}>
                                        <Dropdown.Item  key={language.id} eventKey={language.id} className="language-dropdown-item">
                                            <img src={language.flagImg} className="mr-2"/>
                                            <span>{language.name}</span>
                                        </Dropdown.Item>
                                    </Fragment>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Fragment>
            </>
        );
}

export default LanguageDropdown;