import React,{Fragment} from 'react';
import {MessageNotificationItems} from "../../utils/constants/HeaderNotifications";
import {Trans} from "react-i18next";

const MessageNotifications = () =>  {
    let numberOfNotifications =MessageNotificationItems.length;
        return (
            <>
                <Fragment>
                    <a id="messages-notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false" className="nav-link">
                        <i className="fa fa-envelope"></i>
                        <span className="badge badge-info">{numberOfNotifications}</span>
                    </a>
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                        {MessageNotificationItems.map((notification, index) =>{return(
                            <li key={notification.id}>
                                <a rel="nofollow" href="#" className="dropdown-item d-flex">
                                    <div className="msg-profile mr-3">
                                        <i className="fas fa-user fa-lg fa-fw"></i>
                                    </div>
                                    <div className="msg-body">
                                        <h3 className="h5">{notification.author}</h3>
                                        <span>{notification.action}</span>
                                        <small>{notification.time}</small>
                                    </div>
                                </a>
                            </li>
                        )})}
                        <hr/>
                        <li>
                            <a rel="nofollow" href="#" className="dropdown-item all-notifications text-center">
                                <strong> <i className="fa fa-envelope fa-lg fa-fw mr-2"></i>
                                  <Trans i18nKey="header.read-all-messages"> Read all messages</Trans>
                                </strong>
                            </a>
                        </li>
                    </ul>
                </Fragment>
            </>
        );
}

export default MessageNotifications;