import React, {Fragment, useState} from 'react';
import userImg from '../../img/user.svg';
import {Trans} from 'react-i18next';

const UserDropdown = ()=>  {
         const username = localStorage.getItem('username');
         const position = localStorage.getItem('position');
         const isAuthenticated = localStorage.getItem('isAuthenticated');

         let userInfo= {
             id: "userId",
             name:username,
             position:position,
             avatar:userImg,
             isSignedIn:isAuthenticated
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
                                <span className="d-none d-sm-inline-block mr-2">
                                   <Trans i18nKey="header.my-profile"> My Profile</Trans>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="user-dropdown-item dropdown-item">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block mr-2">
                                    <Trans i18nKey="header.settings"> Settings </Trans>
                                </span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href="/sign-in" className="user-dropdown-item dropdown-item logout">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block">
                                  <Trans i18nKey="auth.sign-out"> Sign Out </Trans>
                                </span>

                            </a>
                        </li>
                    </ul>
                </Fragment>
            </>
        );

}

export default UserDropdown;