import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import * as Constants from "../../utils/constants";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as Io5Icons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import styled from 'styled-components';
import {SideBarToggle} from "./SideBarToggle";
import SubMenu from './SubMenu';


const SideBarNav = styled.nav`
    background: #43425D;
    padding:0;
    border-top: 2px solid #9160A6;
    color: #ffffff;
    display:flex;
    align-items: start;
    max-width: 15%;
    width: 100%;
    position:fixed;
    justify-content:flex-start;
    transition:350ms;
    z-index:10;
    left:${({displaySideBar})=>(displaySideBar? '0':'-100%')}
`;

const SideBarWrap = styled.div`
 width:100%;
`;

const SideBar = (props)=> {

    const {t,i18n} = useTranslation('translation');
    let displaySideBar = props.displaySideBar;

    const showSideBar = ()=>{
        displaySideBar=false;
        props.setDisplaySideBar(false);
        props.setDisplayToggle(true);
    }



    const menuData = [
        {
            // Dashboard
            title: `${t('sidebar.menu.dashboard')}`,
            path: Constants.DASHBOARD_PATHNAME,
            icon: <MdIcons.MdDashboard/>
        },
        {
            // Projects
            title: `${t('sidebar.menu.projects')}`,
            path: Constants.PROJECTS_PATHNAME,
            icon: <FaIcons.FaList/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // action plans
                    title: `${t('sidebar.submenu.action-plans')}`,
                    path: Constants.ACTION_PLANS_PATHNAME,
                    icon: <FaIcons.FaTasks/>
                },
                {
                    // actions
                    title: `${t('sidebar.submenu.actions')}`,
                    path: Constants.ACTIONS_PATHNAME,
                    icon:<GrIcons.GrTask/>
                },
                {
                    //Activities
                    title: `${t('sidebar.submenu.activities')}`,
                    path: Constants.ACTIVITIES_PATHNAME,
                    icon: <BsIcons.BsListTask/>
                }
            ]
        },
        {
            //Budgets
            title: `${t('sidebar.menu.budgets')}`,
            path: Constants.BUDGETS_PATHNAME,
            icon:<FaIcons.FaMoneyBillAlt/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // budget lines
                    title: `${t('sidebar.submenu.budget-lines')}`,
                    path: Constants.BUDGET_LINES_PATHNAME,
                    icon: <GiIcons.GiMoneyStack/>
                },
                {
                    // Payments
                    title: `${t('sidebar.submenu.payments')}`,
                    path: Constants.PAYMENTS_PATHNAME,
                    icon:<GiIcons.GiPayMoney/>
                }
            ]

        },
        {
            //procurements
            title: `${t('sidebar.menu.procurements')}`,
            path: Constants.PROCUREMENTS_PATHNAME,
            icon:<MdIcons.MdReceipt/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // procurement plans
                    title: `${t('sidebar.submenu.procurement-plans')}`,
                    path: Constants.PROCUREMENTS_PLANS_PATHNAME,
                    icon: <Io5Icons.IoReceiptSharp/>
                },
                {
                    // Contracts
                    title: `${t('sidebar.submenu.contracts')}`,
                    path: Constants.CONTRACTS_PATHNAME,
                    icon:<FaIcons.FaFileContract/>
                },
                {
                    // invoices
                    title:`${t('sidebar.submenu.invoices')}`,
                    path: Constants.INVOICES_PATHNAME,
                    icon: <FaIcons.FaFileInvoice/>
                }
            ]
        },
        {
            //Indicators
            title:`${t('sidebar.menu.indicators')}`,
            path:Constants.INDICATORS_PATHNAME,
            icon:<AiIcons.AiFillDashboard/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // impact
                    title: `${t('sidebar.submenu.indicators-of-impact')}`,
                    path: Constants.INDICATORS_OF_IMPACT_PATHNAME,
                    icon: <GiIcons.GiSupersonicArrow/>
                },
                {
                    // results
                    title: `${t('sidebar.submenu.indicators-of-results')}`,
                    path: Constants.INDICATORS_OF_RESULTS_PATHNAME,
                    icon: <FaIcons.FaChartLine/>
                },
                {
                    // evaluation
                    title:`${t('sidebar.submenu.indicators-of-evaluation')}`,
                    path: Constants.INDICATORS_OF_EVAL_PATHNAME,
                    icon: <GoIcons.GoChecklist/>
                }
            ]
        },
        {
            //stakeholders
            title: `${t('sidebar.menu.stakeholders')}`,
            path:Constants.STAKEHOLDERS_PATHNAME,
            icon: <FaIcons.FaHandshake/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // beneficiaries
                    title: `${t('sidebar.submenu.beneficiaries')}`,
                    path: Constants.BENEFICIARIES_PATHNAME,
                    icon:<GiIcons.GiReceiveMoney/>
                },
                {
                    // suppliers
                    title: `${t('sidebar.submenu.suppliers')}`,
                    path: Constants.SUPPLIERS_PATHNAME,
                    icon: <FaIcons.FaPeopleCarry/>
                },
                {
                    // supervisor
                    title:`${t('sidebar.submenu.supervisors')}`,
                    path: Constants.SUPERVISORS_PATHNAME,
                    icon: <FaIcons.FaUserTie/>
                }
            ]
        },
        {
            // Messages
            title:  `${t('sidebar.menu.messages')}`,
            path:Constants.MESSAGES_PATHNAME,
            icon:<FaIcons.FaEnvelopeOpenText/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // compose
                    title: `${t('sidebar.submenu.compose-mail')}`,
                    path: Constants.COMPOSE_EMAIL_PATHNAME,
                    icon:<FaIcons.FaPen/>
                },
                {
                    // inbox
                    title: `${t('sidebar.submenu.inbox')}`,
                    path: Constants.INBOX_PATHNAME,
                    icon: <FaIcons.FaInbox/>
                },
                {
                    // sent
                    title:`${t('sidebar.submenu.sent')}`,
                    path: Constants.SENT_PATHNAME,
                    icon: <MdIcons.MdSend/>
                },
                {
                    //trash
                    title: `${t('sidebar.submenu.trash')}`,
                    path: Constants.TRASH_PATHNAME,
                    icon: <FaIcons.FaTrash/>
                }
            ]
        },
        {
            // notifications
            title: `${t('sidebar.menu.notifications')}`,
            path: Constants.NOTIFICATIONS_PATHNAME,
            icon:<FaIcons.FaBell/>
        },
        {
            //settings
            title: `${t('sidebar.menu.settings')}`,
            path: Constants.SETTINGS_PATHNAME,
            icon: <FaIcons.FaCog/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            subNav:[
                {
                    // users
                    title: `${t('sidebar.submenu.users')}`,
                    path: Constants.USERS_PATHNAME,
                    icon:<FaIcons.FaUsers/>
                },
                {
                    // permissions
                    title: `${t('sidebar.submenu.permissions')}`,
                    path: Constants.PERMISSIONS_PATHNAME,
                    icon: <FaIcons.FaLock/>
                }
            ]
        }
    ];

    return (
            <>
                <div className="col-md-2">
                        <SideBarNav displaySideBar={displaySideBar}>
                            <SideBarWrap>
                                <SideBarToggle to="#">
                                    <AiIcons.AiOutlineClose onClick={showSideBar}/>
                                </SideBarToggle>
                                {menuData.map((item,index)=>{
                                    return <SubMenu item={item} index={index}/>
                                })}
                            </SideBarWrap>
                        </SideBarNav>
                </div>
            </>
    );

}

export default SideBar;