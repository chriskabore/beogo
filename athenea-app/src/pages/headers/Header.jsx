import React, {useState} from 'react';
import atheneaLogo  from '../../logo.svg';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import i18next from "i18next";

import LanguageDropdown from "../../components/header/LanguageDropdown";
import UserDropdown from "../../components/header/UserDropdown";
import ActivityNotifications from "../../components/header/ActivityNotifications";
import MessageNotifications from "../../components/header/MessageNotifications";
import LanguageSelector from "../../components/header/LanguageSelector";



const Header = () => {

    let currentLanguage = '';
    const getSelectedLocale= (locale)=>{
        currentLanguage = locale;
        i18next.changeLanguage(currentLanguage);

    }
    const handleSelect = (e)=>{
        console.log(e);
    }

        return (
            <>
                <header className="header row navbar navbar-light navbar-expand-md">
                    <nav className="nav navbar navbar-expand-md w-100">
                        <div className="container-fluid">
                            <div className="navbar-wrapper w-100">
                                <div className="navbar-header">
                                    <a href="#" className="navbar-brand">
                                        <img  src={atheneaLogo} alt="athenea logo" className="brand-logo-image img-fluid"/>
                                    </a>
                                </div>
                                <button type="button" className="navbar-toggler" data-toggle="collapse"
                                        data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                                        aria-label="Toggle-navigation">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="toggler-icon"><i className="fas fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end">
                                    <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                                        <li className="nav-item dropdown">
                                            <ActivityNotifications/>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <MessageNotifications/>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <LanguageSelector onSelectLanguge={getSelectedLocale}/>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <UserDropdown/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );

}

export default Header;