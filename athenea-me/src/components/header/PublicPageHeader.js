import React, {Fragment} from 'react';
import atheneaLogo  from '../../logo.svg';
import {Trans} from 'react-i18next';
import LanguageSelector from "../../components/header/content/LanguageSelector";
import {changeLanguage} from "../../helpers/language/LanguageHelper";


const PublicPageHeader = (props) => {

    const getSelectedLocale = (selectedLocale) => {
        changeLanguage(selectedLocale);
    }

    return (
        <>
            <Fragment>
                <header className="container-fluid login-header">
                    <div className="row logo-image-row w-100">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="login-logo-container">
                                <img src={atheneaLogo} alt="athenea logo" className="logo-athenea img-fluid"/>
                            </div>
                        </div>
                        <div className="float-right col-md-1 py-3">
                            <LanguageSelector onSelectLanguge={getSelectedLocale}/>
                        </div>
                    </div>
                    <div className="row slogan-phrase-row w-100">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="phrase-container text-center">
                                <p className="phrase">
                                    <Trans i18nKey="login.phrase-text">Manage your projects more
                                        easily and follow the progress of your action plans in real time.</Trans>
                                </p>
                            </div>
                        </div>
                        <div className="float-right col-md-1"></div>
                    </div>
                </header>
            </Fragment>
        </>
    );
}

export default PublicPageHeader;