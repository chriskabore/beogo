import React,{useState} from 'react';
import MenuItemToggle from "./MenuItemToggle";
import SubMenu from "./SubMenu";

import {useHistory} from 'react-router-dom';
import styled from 'styled-components';


const MenuElement = styled.li`
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

const MenuItem = (props) => {

    const {menuItem, menuItemIndex, activeItem, activeIndex} = props;
    const history = useHistory();
    const lastDisplaySubMenuString = localStorage.getItem("lastDisplaySubMenu");
    const lastDisplaySubMenu = JSON.parse(lastDisplaySubMenuString);
    const defaultDisplaySubMenu = lastDisplaySubMenu!==null ? (activeItem && activeItem.title===menuItem.title):false;
    const [displaySubMenu, setDisplaySubMenu] = useState(defaultDisplaySubMenu);


    const showSubMenu = () =>{
        setDisplaySubMenu(!displaySubMenu);
    }



    const  handleMenuItemClick = (e,menuItem,menuItemIndex) => {
        e.preventDefault();
        showSubMenu();
        localStorage.setItem("lastActiveSubMenuIndex",-1);
        if(menuItem.subMenu){
            localStorage.setItem("lastDisplaySubMenu",!displaySubMenu);
        }else{
            localStorage.setItem("lastDisplaySubMenu",false);
        }
        localStorage.setItem("lastActiveIndex", menuItemIndex);
        history.push(menuItem.path);

    }



    return (
            <>
                {menuItem && <MenuElement
                    className={(activeItem && (activeItem.title === menuItem.title)) ? "nav-item menu-item active" : "nav-item menu-item"}
                    key={menuItem.title} index={menuItemIndex} onClick={(e) => handleMenuItemClick(e, menuItem,menuItemIndex)}>
                    <MenuLink href="#" className="nav-link">
                        <i className="menu-item-icon">{menuItem.icon}</i>
                        <MenuText className="menu-text">{menuItem.title}</MenuText>
                    </MenuLink>
                    <MenuItemToggle menuItem={menuItem} isActive={(activeItem && (activeItem.title === menuItem.title))} displaySubMenu={displaySubMenu}/>
                </MenuElement>}
                {displaySubMenu && menuItem.subMenu && <SubMenu subMenuData={menuItem.subMenu} activeMenuItemIndex={activeIndex}/>}
            </>
        );
}

export default MenuItem;