import React, {Fragment, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import userImg from '../../img/user.svg';

const UserDropdown = ()=>  {
         let userInfo= {
             id: "userId",
             name:"Kirsi Armand KABORE",
             position:"Project Coordinator",
             avatar:userImg,
             isSignedIn:true
         }
    const [toggleContent, setToggleContent]= useState(<><Fragment>
        <img src={userInfo.avatar} className="img-fluid rounded-circle user-avatar"/>
        <div className="user-info ml-3">
            <div className="user-name">{userInfo.name}</div>
            <div className="user-position">{userInfo.position}</div>
        </div>
    </Fragment></>);
        return (
            <>
                <Fragment>
                  <a id="user-dropdown" rel="nofollow" data-target="#" href="#"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                     className="nav-link language">
                      {toggleContent}
                  </a>
                    <ul aria-labelledby="user-dropdown" className="user-dropdown dropdown-menu">

                        <li>
                            <a href="/profile" className="user-dropdown-item dropdown-item">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block mr-2">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="user-dropdown-item dropdown-item">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block mr-2">Settings</span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href="/sign-in" className="user-dropdown-item dropdown-item logout">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block">Sign Out</span>

                            </a>
                        </li>
                    </ul>
                </Fragment>
            </>
        );

}

export default UserDropdown;