import React, {Fragment} from 'react';
import {Trans} from "react-i18next";
import {getMessagesNotifications} from "../../../services/MessagesService";
import * as FaIcons from 'react-icons/fa';


const MessageNotifications = (props) => {
    let messageNotifications = getMessagesNotifications();
    let numberOfNotifications =messageNotifications.length;

    return (
            <>
                <Fragment>
                    <a id="messages-notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false" className="nav-link">
                         <FaIcons.FaEnvelope className="icon icon-envelope"/>
                        <span className="badge badge-info">{numberOfNotifications}</span>
                    </a>
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                        {messageNotifications.map((notification, index) =>{return(
                            <li key={notification.id}>
                                <a rel="nofollow" href="#" className="dropdown-item d-flex">
                                    <div className="msg-profile mr-3">
                                        <FaIcons.FaUser className="icon icon-lg icon-fw"/>
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
                                <strong> <FaIcons.FaEnvelope className="icon mr-2 icon-fw"/>
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