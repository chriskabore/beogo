import React, {Fragment} from 'react';
import {ActivityNotificationItems} from "../../utils/constants/HeaderNotifications";
import {Trans} from "react-i18next";
import * as Constants from "../../utils/constants";

const ActivityNotifications = props =>  {

      let numberOfNotifications = ActivityNotificationItems.length;

        return (
            <>
                <Fragment>
                    <a id="notifications" className="nav-link" rel="nofollow" data-target="#" href="#"
                       data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        <i className="fa fa-bell fa-lg"></i>
                        <span className="badge badge-warning">{numberOfNotifications}</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="notifications">
                        {ActivityNotificationItems.map((notification, index)=>{
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
                                    <i className="fa fa-bell all-notifications-icon"></i>
                                    <Trans i18nKey={Constants.VIEW_ALL_NOTIFICATIONS_MSG_PROP}>view all notifications</Trans>
                                </strong>
                            </a>
                        </li>
                    </ul>

                </Fragment>
            </>
        );

}

export default ActivityNotifications;