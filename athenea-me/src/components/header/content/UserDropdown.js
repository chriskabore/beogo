import React, {Fragment} from 'react';
import * as Constant from '../../../helpers/constants/index';
import {useHistory} from 'react-router-dom';
import {getUser} from "../../../services/UserService";
import {deleteUserSessionData} from '../../../services/AuthenticationService';
import {Trans} from "react-i18next";
import * as FaIcons from 'react-icons/fa';

const UserDropdown = (props) => {
    let authenticatedUser = getUser();
    const history = useHistory();
    let userInfo={};
    if(authenticatedUser){
        const userId = authenticatedUser.id;
        const username = authenticatedUser.name;
        const position = authenticatedUser.position;
        const userImg = authenticatedUser.avatar;
        const isSignedIn= authenticatedUser.isSignedIn;
        const isAuthenticated = isSignedIn;

        userInfo= {
            id: userId,
            name:username,
            position:position,
            avatar:userImg,
            isSignedIn:isAuthenticated
        }

    }

    const toggleContent= <Fragment>
        <img src={userInfo.avatar} className="img-fluid rounded-circle user-avatar"/>
        <div className="user-info ml-3">
            <div className="user-name">{userInfo.name}</div>
            <div className="user-position">{userInfo.position}</div>
        </div>
    </Fragment>;

    const handleSignOut = (e) =>{
        e.preventDefault();
        deleteUserSessionData();
        history.push(Constant.SIGN_IN_PATHNAME);
    }
    const handleGoToProfile = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem("lastActiveIndex");
        sessionStorage.removeItem("lastActiveSubMenuIndex");
        sessionStorage.removeItem("lastDisplaySubMenu");
        history.push(Constant.PROFILE_PATHNAME);
    }

    const handleGoToPreferences = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem("lastActiveIndex");
        sessionStorage.removeItem("lastActiveSubMenuIndex");
        sessionStorage.removeItem("lastDisplaySubMenu");
        history.push(Constant.PREFERENCES_PATHNAME);
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
                            <a href={Constant.PROFILE_PATHNAME} className="user-dropdown-item dropdown-item" onClick={handleGoToProfile}>
                               <FaIcons.FaUser className="icon text-gray-400 mr-2 icon-sm icon-fw"/>
                                <span className="d-none d-sm-inline-block mr-2">
                                   <Trans i18nKey="header.my-profile"> My Profile</Trans>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={Constant.PREFERENCES_PATHNAME} className="user-dropdown-item dropdown-item" onClick={handleGoToPreferences}>
                                <FaIcons.FaCogs className="icon mr-2 text-gray-400 icon-sm icon-fw"/>
                                <span className="d-none d-sm-inline-block mr-2">
                                    <Trans i18nKey="header.preferences"> Preferences </Trans>
                                </span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href={Constant.SIGN_IN_PATHNAME} className="user-dropdown-item dropdown-item logout" onClick={handleSignOut}>
                                <FaIcons.FaSignOutAlt className="icon-sm icon-fw mr-2 text-gray-400"/>
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