import React from 'react';
import styled from 'styled-components';
import {changeLanguage} from "../../helpers/language/LanguageHelper";
import * as FaIcons from 'react-icons/fa';
import * as Constant from '../../helpers/constants/index';
import atheneaLogo  from '../../logo.svg';
import ActivityNotifications from "../../components/header/content/ActivityNotifications";
import MessageNotifications from "../../components/header/content/MessageNotifications";
import LanguageSelector from "../../components/header/content/LanguageSelector";
import UserDropdown from "../../components/header/content/UserDropdown";
import {SideBarToggle} from "../../components/sidebar/SideBarToggle";
import {useTranslation} from "react-i18next";

const ShowSideBarText= styled.span`
 color:#ffffff;
 font-weight:200;
 font-size:1rem;
 margin-right:0.5rem;
 &:hover{
  color:#9160A6;
 }
 `;

const AuthenticatedPageHeader = (props)=> {

    const { t} = useTranslation(Constant.TRANSLATION_PARAM);
    const getSelectedLocale = (selectedLocale) => {
        changeLanguage(selectedLocale);
    }

    const handleClick = ()=>{
        props.setDisplaySideBar(true);
        props.setDisplayToggle(false);
    }


    return (
        <>
            <header className="header row navbar navbar-light navbar-expand-md">
                <nav className="nav navbar navbar-expand-md w-100">
                    <div className="container-fluid pr-0">
                        <div className="navbar-wrapper w-100">
                            <div className="navbar-header">
                                <a href={Constant.HOME_PATHNAME} className="navbar-brand">
                                    <img  src={atheneaLogo} alt="athenea logo" className="brand-logo-image img-fluid"/>
                                </a>
                            </div>

                            <div className="collapse navbar-collapse justify-content-end">
                                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

                                    <li className="nav-item dropdown mr-3">
                                        <ActivityNotifications/>
                                    </li>
                                    <li className="nav-item dropdown mr-5">
                                        <MessageNotifications/>
                                    </li>
                                    <li className="nav-item dropdown ml-5 mr-2">
                                        <LanguageSelector onSelectLanguge={getSelectedLocale}/>
                                    </li>
                                    <li className="nav-item dropdown ml-2 mr-5">
                                        <UserDropdown {...props} />
                                    </li>
                                    <li className={props.displayToggle ? "nav-item dropdown pt-2 ml-4 sidebar-toggle": "d-none"}>
                                        {
                                            props.displayToggle && <SideBarToggle to="#" onClick={handleClick} >
                                                <ShowSideBarText>{t('sidebar.menu-text')}</ShowSideBarText>
                                                <i className="show-sidebar-toggle-icon"><FaIcons.FaBars/></i>
                                            </SideBarToggle>
                                        }
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

export default AuthenticatedPageHeader;