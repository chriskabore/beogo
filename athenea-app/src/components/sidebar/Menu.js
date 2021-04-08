import React,{useState,useEffect}  from 'react';
import * as Constants from "../../utils/constants";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as Io5Icons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import {useTranslation} from "react-i18next";
import {useHistory} from 'react-router-dom';
import {ActivityNotificationItems, MessageNotificationItems} from "../../utils/constants/HeaderNotifications";

import MenuItem from "./MenuItem";




const Menu = () => {

    const { t, i18n } = useTranslation(Constants.TRANSLATION_PARAM);
    let numberOfActNotifications = ActivityNotificationItems.length;
    let numberOfMsgNotifications =MessageNotificationItems.length;

    const menuData = [
        {
            // Dashboard
            title: `${t('sidebar.menu.dashboard')}`,
            path: Constants.DASHBOARD_PATHNAME,
            icon: <MdIcons.MdDashboard/>,
            isActive: false
        },
        {
            // Projects
            title: `${t('sidebar.menu.projects')}`,
            path: Constants.PROJECTS_PATHNAME,
            icon: <FaIcons.FaList/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            isActive: false,
            subMenu:[
                {
                    // action plans
                    title: `${t('sidebar.submenu.action-plans')}`,
                    path: Constants.ACTION_PLANS_PATHNAME,
                    icon: <FaIcons.FaTasks/>,
                    isActive: false

                },
                {
                    // actions
                    title: `${t('sidebar.submenu.actions')}`,
                    path: Constants.ACTIONS_PATHNAME,
                    icon:<BsIcons.BsListCheck/>,
                    isActive: false
                },
                {
                    //Activities
                    title: `${t('sidebar.submenu.activities')}`,
                    path: Constants.ACTIVITIES_PATHNAME,
                    icon: <BsIcons.BsListTask/>,
                    isActive: false
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
            isActive: false,
            subMenu:[
                {
                    // budget lines
                    title: `${t('sidebar.submenu.budget-lines')}`,
                    path: Constants.BUDGET_LINES_PATHNAME,
                    icon: <GiIcons.GiMoneyStack/>,
                    isActive: false
                },
                {
                    // Payments
                    title: `${t('sidebar.submenu.payments')}`,
                    path: Constants.PAYMENTS_PATHNAME,
                    icon:<GiIcons.GiPayMoney/>,
                    isActive: false
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
            isActive: false,
            subMenu:[
                {
                    // procurement plans
                    title: `${t('sidebar.submenu.procurement-plans')}`,
                    path: Constants.PROCUREMENTS_PLANS_PATHNAME,
                    icon: <Io5Icons.IoReceiptSharp/>,
                    isActive: false
                },
                {
                    // Contracts
                    title: `${t('sidebar.submenu.contracts')}`,
                    path: Constants.CONTRACTS_PATHNAME,
                    icon:<FaIcons.FaFileContract/>,
                    isActive: false
                },
                {
                    // invoices
                    title:`${t('sidebar.submenu.invoices')}`,
                    path: Constants.INVOICES_PATHNAME,
                    icon: <FaIcons.FaFileInvoice/>,
                    isActive: false
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
            isActive: false,
            subMenu:[
                {
                    // impact
                    title: `${t('sidebar.submenu.indicators-of-impact')}`,
                    path: Constants.INDICATORS_OF_IMPACT_PATHNAME,
                    icon: <GiIcons.GiSupersonicArrow/>,
                    isActive: false
                },
                {
                    // results
                    title: `${t('sidebar.submenu.indicators-of-results')}`,
                    path: Constants.INDICATORS_OF_RESULTS_PATHNAME,
                    icon: <FaIcons.FaChartLine/>,
                    isActive: false
                },
                {
                    // evaluation
                    title:`${t('sidebar.submenu.indicators-of-evaluation')}`,
                    path: Constants.INDICATORS_OF_EVAL_PATHNAME,
                    icon: <GoIcons.GoChecklist/>,
                    isActive: false
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
            isActive: false,
            subMenu:[
                {
                    // beneficiaries
                    title: `${t('sidebar.submenu.beneficiaries')}`,
                    path: Constants.BENEFICIARIES_PATHNAME,
                    icon:<GiIcons.GiReceiveMoney/>,
                    isActive: false
                },
                {
                    // suppliers
                    title: `${t('sidebar.submenu.suppliers')}`,
                    path: Constants.SUPPLIERS_PATHNAME,
                    icon: <FaIcons.FaPeopleCarry/>,
                    isActive: false
                },
                {
                    // supervisor
                    title:`${t('sidebar.submenu.supervisors')}`,
                    path: Constants.SUPERVISORS_PATHNAME,
                    icon: <FaIcons.FaUserTie/>,
                    isActive: false
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
            isActive: false,
            subMenu:[
                {
                    // compose
                    title: `${t('sidebar.submenu.compose-mail')}`,
                    path: Constants.COMPOSE_EMAIL_PATHNAME,
                    icon:<FaIcons.FaPen/>,
                    isActive: false
                },
                {
                    // inbox
                    title: `${t('sidebar.submenu.inbox')}`,
                    path: Constants.INBOX_PATHNAME,
                    icon: <FaIcons.FaInbox/>,
                    isActive: false,
                    badge: <span className="inbox-badge badge rounded bg-white float-right">{numberOfMsgNotifications}</span>,
                },
                {
                    // sent
                    title:`${t('sidebar.submenu.sent')}`,
                    path: Constants.SENT_PATHNAME,
                    icon: <MdIcons.MdSend/>,
                    isActive: false
                },
                {
                    //trash
                    title: `${t('sidebar.submenu.trash')}`,
                    path: Constants.TRASH_PATHNAME,
                    icon: <FaIcons.FaTrash/>,
                    isActive: false
                }
            ]
        },
        {
            // notifications
            title: `${t('sidebar.menu.notifications')}`,
            path: Constants.NOTIFICATIONS_PATHNAME,
            icon:<FaIcons.FaBell/>,
            isActive: false,
            badge: <span className="notification-badge badge rounded bg-white float-right">{numberOfActNotifications}</span>
        },
        {
            //settings
            title: `${t('sidebar.menu.settings')}`,
            path: Constants.SETTINGS_PATHNAME,
            icon: <FaIcons.FaCog/>,
            iconClosed: <AiIcons.AiFillCaretDown/>,
            iconOpen: <AiIcons.AiFillCaretUp/>,
            isActive: false,
            subMenu:[
                {
                    // users
                    title: `${t('sidebar.submenu.users')}`,
                    path: Constants.USERS_PATHNAME,
                    icon:<FaIcons.FaUsers/>,
                    isActive: false
                },
                {
                    // permissions
                    title: `${t('sidebar.submenu.permissions')}`,
                    path: Constants.PERMISSIONS_PATHNAME,
                    icon: <FaIcons.FaLock/>,
                    isActive: false
                }
            ]
        }
    ];
    const history = useHistory();
    const location = history.location;


    //Load this string from localStorage
    const lastActiveIndexString = sessionStorage.getItem("lastActiveIndex");
    //Parse it to a number
    const lastActiveIndex = (lastActiveIndexString ? Number(lastActiveIndexString): -1);
    const lastActiveMenuItem = lastActiveIndex!== -1 ? menuData[lastActiveIndex] : {};
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex);
    const [activeItem, setActiveItem] = useState(lastActiveMenuItem ? lastActiveMenuItem : {});



    const changeActiveIndex = (newIndex) =>{
        sessionStorage.setItem("lastActiveIndex", newIndex);
        setActiveIndex(newIndex);
    }

    //This re-renders when the route changes
    useEffect(()=> {
        //Get an item with the same 'route' as the one provided by react router (the current route)
        const activeItemIndex = menuData.findIndex(item=> item.path === location.pathname);
        if(activeItemIndex!==-1){
            setActiveItem(menuData[activeItemIndex]);
            changeActiveIndex(activeItemIndex);
        }

    }, [location]);



    return (
            <>
                {menuData.map((menuItem, menuItemIndex)=>{
                    return <MenuItem menuItem={menuItem} key={menuItemIndex} activeItem={activeItem} activeIndex={activeIndex} menuItemIndex={menuItemIndex} />
                })}
            </>
        );
}

export default Menu;