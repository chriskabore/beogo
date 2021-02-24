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
        <div className="user-info">
            <h6 className="user-name">{userInfo.name}</h6>
            <p className="user-position">{userInfo.position}</p>
        </div>
    </Fragment></>);
        return (
            <>
                <Fragment>
                  <a id="user-dropdown" rel="nofollow" data-target="#" href="#"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                     className="nav-link language dropdown-toggle">
                      {toggleContent}
                  </a>
                    <ul aria-labelledby="user-dropdown" className="user-dropdown dropdown-menu">

                        <li>
                            <a href="/profile" className="user-dropdown-item dropdown-item">
                                <span className="d-none d-sm-inline-block mr-2">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="user-dropdown-item dropdown-item">
                                <span className="d-none d-sm-inline-block mr-2">Settings</span>
                            </a>
                        </li>
                        <hr/>
                        <li>
                            <a href="/sign-in" className="user-dropdown-item dropdown-item logout">
                                <span className="d-none d-sm-inline-block mr-2">Sign Out</span>
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </li>
                    </ul>
                </Fragment>
            </>
        );

}

export default UserDropdown;