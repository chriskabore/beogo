import React, {useState} from 'react';
import atheneaLogo  from '../../logo.svg';
import i18next from "i18next";
import UserDropdown from "../../components/header/UserDropdown";
import ActivityNotifications from "../../components/header/ActivityNotifications";
import MessageNotifications from "../../components/header/MessageNotifications";
import LanguageSelector from "../../components/header/LanguageSelector";
import {SideBarToggle} from "../../components/sidebar/SideBarToggle";
import * as FaIcons from 'react-icons/fa';






const SignedInHeader = (props) => {

    let currentLanguage = '';
    const getSelectedLocale= (locale)=>{
        currentLanguage = locale;
        i18next.changeLanguage(currentLanguage);

    }

    const handleClick = ()=>{
        props.setDisplaySideBar(true);
        props.setDisplayToggle(false);
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

                                <div className="collapse navbar-collapse justify-content-end">
                                    <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

                                        <li className="nav-item dropdown mr-3">
                                            <ActivityNotifications/>
                                        </li>
                                        <li className="nav-item dropdown mr-3">
                                            <MessageNotifications/>
                                        </li>
                                        <li className="nav-item dropdown ml-3 mr-3">
                                            <LanguageSelector onSelectLanguge={getSelectedLocale}/>
                                        </li>
                                        <li className="nav-item dropdown ml-2">
                                            <UserDropdown/>
                                        </li>
                                        {
                                            props.displayToggle && <SideBarToggle to="#" >
                                                <FaIcons.FaBars onClick={handleClick} />
                                            </SideBarToggle>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
}

export default SignedInHeader;