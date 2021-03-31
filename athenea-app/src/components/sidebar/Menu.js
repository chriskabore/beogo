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
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ActivityNotificationItems, MessageNotificationItems} from "../../utils/constants/HeaderNotifications";
import MenuItemToggle from "./MenuItemToggle";


const MenuItem = styled.li`
  display:flex;
  color:#fff;
  justify-content: space-between;
  align-items: center;
  list-style:none;
  text-decoration:none;
  font-size: 1.05rem;
  font-weight: 200;
  border-bottom: 1px solid #23282e;
  line-height: 2.2rem;
  &:hover{
    border-left: 4px solid #9160A6;
    background-color: #4f5b69;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    color:#fff;
    text-decoration:none;
    cursor: pointer;
  }&.active{
    border-left: 4px solid #9160A6;
    background-color: #4f5b69;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    color:#fff;
    text-decoration:none;
    cursor: pointer;
  }
`;

const MenuText = styled.span`
 margin-left:1rem;
`;

const MenuLink = styled.a`
    color:#ffffff;
    &:hover{
        color:#ffffff;
    }
`;


const Menu = (props, {defaultActive}) => {

    let numberOfActNotifications = ActivityNotificationItems.length;
    let numberOfMsgNotifications =MessageNotificationItems.length;



    const {t,i18n} = useTranslation('translation');
    const history = useHistory();
    const [displaySubMenu, setDisplaySubMenu] = useState(false);

    const location = history.location;


    //Load this string from localStorage
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    //Parse it to a number
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(defaultActive || Number(defaultActive));
    const [activeItem, setActiveItem] = useState({});


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

    const showSubMenu = () =>{
        setDisplaySubMenu(!displaySubMenu);
    }

    const changeActiveIndex = (newIndex) =>{
        localStorage.setItem("lastActiveIndex", newIndex);
        setActiveIndex(newIndex);
    }

    //This re-renders when the route changes
    useEffect(()=> {
        //Get an item with the same 'route' as the one provided by react router (the current route)
        const activeItemIndex = menuData.findIndex(item=> item.path === location.pathname);
        setActiveItem(menuData[activeItemIndex]);
        changeActiveIndex(activeItemIndex);
    }, [location]);

    const  handleMenuItemClick = (e,menuItem) => {
        e.preventDefault();
        setActiveItem(menuItem);
        showSubMenu();
        history.push(menuItem.path);

    }

    return (
            <>
                {menuData.map((menuItem, index)=>{
                    return <MenuItem className={(activeItem.title === menuItem.title)? "nav-item menu-item active":"nav-item menu-item"} key={menuItem.title} index={index}  onClick={(e)=>handleMenuItemClick(e,menuItem)}>
                        <MenuLink href="#" className="nav-link">
                            <i className="menu-item-icon">{menuItem.icon}</i>
                            <MenuText className="menu-text">{menuItem.title}</MenuText>
                        </MenuLink>
                        <MenuItemToggle menuItem={menuItem} isActive={activeItem.title === menuItem.title}/>
                    </MenuItem>
                })}
            </>
        );
}

export default Menu;