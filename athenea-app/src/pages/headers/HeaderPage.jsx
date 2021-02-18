import React, {Component,Fragment} from 'react';
import atheneaLogo  from '../../logo.svg';
import frenchFlag from '../../img/flags/FR.png';
import englishFlag from '../../img/flags/GB.png';
import {handleLanguageSwitch} from "../../utils/i18n/Lang";
import LanguageSelector from "../../components/language/LanguageSelector";
import { Translation } from "react-i18next";



const HeaderPage = props =>  {

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
                                            <a id="notifications" className="nav-link" rel="nofollow" data-target="#"
                                               href="#" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <i className="fa fa-bell fa-lg"></i>
                                                <span className="badge badge-warning">3</span>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="notifications">
                                                <li>
                                                    <a className="dropdown-item">
                                                        <div className="notification d-flex justify-content-between">
                                                            <div className="notification-content">
                                                                <span className="action-author">Felix Yameogo</span>
                                                                <span className="action">updated an activity</span>
                                                            </div>
                                                            <div className="notification-time">
                                                                <small>
                                                                    <span className="action-time">3 minutes</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item">
                                                        <div className="notification d-flex justify-content-between">
                                                            <div className="notification-content">
                                                                <span className="action-author">Felix Yameogo</span>
                                                                <span className="action">updated an activity</span>
                                                            </div>
                                                            <div className="notification-time">
                                                                <small>
                                                                    <span className="action-time">3 minutes</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item">
                                                        <div className="notification d-flex justify-content-between">
                                                            <div className="notification-content">
                                                                <span className="action-author">Felix Yameogo</span>
                                                                <span className="action">updated an activity</span>
                                                            </div>
                                                            <div className="notification-time">
                                                                <small>
                                                                    <span className="action-time">3 minutes</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="nofollow" href="#"
                                                       className="dropdown-item all-notifications text-center">
                                                        <strong>
                                                            <i className="fa fa-bell all-notifications-icon"></i>view
                                                            all notifications
                                                        </strong>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a id="messages-notifications" rel="nofollow" data-target="#" href="#"
                                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                               className="nav-link">
                                                <i className="fa fa-envelope"></i>
                                                <span className="badge badge-info">2</span>
                                            </a>
                                            <ul aria-labelledby="notifications" className="dropdown-menu">
                                                <li>
                                                    <a rel="nofollow" href="#" className="dropdown-item d-flex">
                                                        <div className="msg-profile mr-3">
                                                            <i className="fas fa-user fa-lg fa-fw"></i>
                                                        </div>
                                                        <div className="msg-body">
                                                            <h5 className="h5">Felix Yameogo</h5>
                                                            <span>sent you a direct message</span>
                                                            <small>On 05-05-2020 at 7:58 pm</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="nofollow" href="#" className="dropdown-item d-flex">
                                                        <div className="msg-profile mr-3">
                                                            <i className="fas fa-user fa-lg fa-fw"></i>
                                                        </div>
                                                        <div className="msg-body">
                                                            <h5 className="h5">Lassina Sana</h5>
                                                            <span>sent you a direct message</span>
                                                            <small>On 05-05-2020 at 7:58 pm</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a rel="nofollow" href="#"
                                                       className="dropdown-item all-notifications text-center">
                                                        <strong> <i className="fa fa-envelope fa-lg fa-fw mr-2"></i>Read
                                                            all messages</strong>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <Translation>{t => <LanguageSelector t={t} />}</Translation>
                                        <li className="nav-item">
                                            <a href="/login" className="nav-link logout">
                                                <span className="d-none d-sm-inline-block">Logout</span>
                                                <i className="fa fa-sign-out"></i>
                                            </a>
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

export default HeaderPage;