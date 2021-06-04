import React, {Fragment} from 'react';
import * as Constant from "../../../helpers/constants/index";
import {Trans} from "react-i18next";
import {getActivityNotifications} from "../../../services/NotificationsService";
import * as FaIcons from 'react-icons/fa';

const ActivityNotifications = (props)=>  {
    let activityNotifications = getActivityNotifications();
    let numberOfNotifications = activityNotifications.length;
    return (
        <>
            <Fragment>
                <a id="notifications" className="nav-link" rel="nofollow" data-target="#" href="#"
                   data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                     <FaIcons.FaBell className="icon icon-lg icon-bell"/>
                    <span className="badge badge-warning">{numberOfNotifications}</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="notifications">
                    {activityNotifications.map((notification, index)=>{
                        return (
                            <li key={notification.id}>
                                <a className="dropdown-item">
                                    <div className="notification d-flex justify-content-between">
                                        <div className="notification-content">
                                            <span className="action-author mr-2">{notification.author}</span>
                                            <span className="action mr-2">{notification.action}</span>
                                        </div>
                                        <div className="notification-time">
                                            <small>
                                                <span className="action-time">{notification.time}</span>
                                            </small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                    <hr />
                    <li>
                        <a rel="nofollow" href="#"
                           className="dropdown-item all-notifications text-center">
                            <strong>
                                <FaIcons.FaBell className="all-notifications-icon"/>
                                <Trans i18nKey={Constant.VIEW_ALL_NOTIFICATIONS_MSG_PROP}>view all notifications</Trans>
                            </strong>
                        </a>
                    </li>
                </ul>

            </Fragment>
        </>
    );
}

export default ActivityNotifications;