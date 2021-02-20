import React from 'react';

import atheneaLogo  from '../../logo.svg';
import { Navbar,Nav,NavDropdown,NavItem, Dropdown } from 'react-bootstrap';
import {ActivityNotificationItems,MessageNotificationItems} from "../../utils/constants/HeaderNotifications";


import { browserHistory } from 'react-router';
import LanguageSelector from "../../components/layouts/LanguageSelector";

const Header = () => {
        return (
            <>
                <Navbar expand="md" sticky="top"  style={{ backgroundColor: '#43425D', color:'#ffffff' }}>
                        <Navbar.Brand>
                            <a href="/">
                                <img  src={atheneaLogo} alt="athenea logo" className="brand-logo-image img-fluid"/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavItem>
                                    <Dropdown id="notifications">
                                        <Dropdown.Toggle>
                                            <i className="fa fa-bell fa-lg"></i>
                                            <span className="badge badge-warning">3</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {ActivityNotificationItems.map((item,index)=>{
                                                return (
                                                    <Dropdown.Item>
                                                        <div className="notification d-flex justify-content-between">
                                                            <div className="notification-content">
                                                                <span className="action-author">{item.author}</span>
                                                                <span className="action">{item.action}</span>
                                                            </div>
                                                            <div className="notification-time">
                                                                <small>
                                                                    <span className="action-time">{item.time}</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                );
                                            })}
                                            <Dropdown.Divider />
                                            <Dropdown.Item>
                                                <a rel="nofollow" href="#"
                                                   className="dropdown-item all-notifications text-center">
                                                    <strong>
                                                        <i className="fa fa-bell all-notifications-icon"></i>view
                                                        all notifications
                                                    </strong>
                                                </a>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <LanguageSelector />
                                </NavItem>
                                <NavItem>
                                    <NavDropdown title="User Dropdown" id="user-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">User Name</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.2">Preferences</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Signout</NavDropdown.Item>
                                    </NavDropdown>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </>
        );

}

export default Header;