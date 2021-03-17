import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const DropdownLink = styled(Link)`
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
  text-decoration:none;
  padding-left:2rem;
  display:flex;
  align-items:center;
  text-decoration:none;
  color:#f5f5f5;
  font-size: 1.05rem;
  font-weight: 200;
  &:hover{
   background-color: #020203;
   color:#fff;
   text-decoration:none;
   cursor:pointer;
  }
`;

const SideBarLink = styled(Link)`
  display:flex;
  color:#fff;
  justify-content: space-between;
  align-items: center;
  list-style:none;
  text-decoration:none;
  font-size: 1.05rem;
  font-weight: 200;
  border-bottom: 1px solid #23282e;
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
  }
`;

const SideBarLabel = styled.span`
 margin-left:1rem;
`;

const SubMenu = ({item}) => {

    const [subNav, setSubNav] = useState(false);
    const showSubNav = () =>{
        setSubNav(!subNav);
    }

        return (
            <>
                <SideBarLink to='#' onClick={item.subNav && showSubNav}>
                    <div className="menu-item">
                        <i className="menu-icon">{item.icon}</i>
                        <SideBarLabel>{item.title}</SideBarLabel>
                    </div>
                    <div className="menu-item-toggle">
                        {item.badge && item.badge}
                        {item.subNav && subNav ? item.iconOpen: item.subNav ? item.iconClosed:null}
                    </div>
                </SideBarLink>
                {subNav && item.subNav.map((subItem,index)=>{
                    return(<DropdownLink to='#' key={index}>
                        <i className="submenu-icon">{subItem.icon}</i>
                        <SideBarLabel>{subItem.title}</SideBarLabel>
                        {subItem.badge && subItem.badge}
                    </DropdownLink>)
                })}
            </>
        );
}

export default SubMenu;