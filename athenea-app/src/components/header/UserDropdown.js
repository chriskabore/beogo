import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Trans} from 'react-i18next';
import {removeUserSession} from "../../services/AuthService";
import {getCurrentUser} from "../../services/UserService";
import * as Constants from "../../utils/constants";
import picCoordo from '../../img/IMG-coordo-PAAQE.jpg';

const UserDropdown = (props) =>  {
         let authenticatedUser = getCurrentUser();
         console.log("user loaded from DB: ", authenticatedUser);
         const history = useHistory();
         let userInfo={};
         if(authenticatedUser){
             const userId = authenticatedUser.userId;
             const username = authenticatedUser.firstName +' '+authenticatedUser.lastName;
             const position = authenticatedUser.position?authenticatedUser.position:'undefined';
             const userImg = picCoordo;
             const isSignedIn= true;
             const isAuthenticated = isSignedIn;

             userInfo= {
                 id: userId,
                 name:username,
                 position:position,
                 avatar:userImg,
                 isSignedIn:isAuthenticated
             }

         }

         const [toggleContent, setToggleContent]= useState(<><Fragment>
        <img src={userInfo.avatar} className="img-fluid rounded-circle user-avatar"/>
        <div className="user-info ml-3 pt-1">
            <div className="user-name">{userInfo.name}</div>
            <div className="user-position">{userInfo.position}</div>
        </div>
    </Fragment></>);
         const handleSignOut = (e) =>{
             e.preventDefault();
             removeUserSession();
             history.push(Constants.SIGNIN_PATHNAME);
         }
         const handleGoToProfile = (e) =>{
             e.preventDefault();
             sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_INDEX);
             sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_SUBMENU_INDEX);
             sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_DISPLAY_SUBMENU);
             history.push(Constants.PROFILE_PATHNAME);
         }

        const handleGoToPreferences = (e) =>{
            e.preventDefault();
            sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_INDEX);
            sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_ACTIVE_SUBMENU_INDEX);
            sessionStorage.removeItem(Constants.SESSION_STORAGE_PARAM_LAST_DISPLAY_SUBMENU);
            history.push(Constants.PREFERENCES_PATHNAME);
         }

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
                            <a href={Constants.PROFILE_PATHNAME} className="user-dropdown-item dropdown-item" onClick={handleGoToProfile}>
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block mr-2">
                                   <Trans i18nKey="header.my-profile"> My Profile</Trans>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={Constants.PREFERENCES_PATHNAME} className="user-dropdown-item dropdown-item" onClick={handleGoToPreferences}>
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="d-none d-sm-inline-block mr-2">
                                    <Trans i18nKey="header.preferences"> Preferences </Trans>
                                </span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href={Constants.SIGNIN_PATHNAME} className="user-dropdown-item dropdown-item logout" onClick={handleSignOut}>
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