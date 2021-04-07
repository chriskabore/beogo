import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';



const SubMenuItem = styled.li`
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
  }&.active{
   background-color: #020203;
   border-left: 4px solid #9160A6;
   color:#fff;
   text-decoration:none;
   cursor:pointer;
  }
`;

const SubMenuText = styled.span`
 margin-left:1rem;
`;

const SubMenuLink = styled.a`
    color:#ffffff;
    &:hover{
        color:#ffffff;
        text-decoration:none;
    }
`;

const SubMenu = (props)=>  {

    const{subMenuData,activeMenuItemIndex} = props;
    const history = useHistory();
    const location = history.location;

    const lastActiveSubMenuIndexString = sessionStorage.getItem("lastActiveSubMenuIndex");
    const lastActiveSubMenuIndex = Number(lastActiveSubMenuIndexString);
    const lastActiveSubMenuItem = subMenuData[lastActiveSubMenuIndex];
    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(lastActiveSubMenuIndex);
    const [activeSubMenuItem, setActiveSubMenuItem] = useState(lastActiveSubMenuItem);



    const handleSubMenuItemClick = (e, subMenuItem, subMenuItemIndex)=>{
        e.preventDefault();
        setActiveSubMenuItem(subMenuItem);
        setActiveSubMenuIndex(subMenuItemIndex);
        sessionStorage.setItem("lastActiveSubMenuIndex",subMenuItemIndex);
        history.push(subMenuItem.path);
    }



        return (
            <>
                {subMenuData && subMenuData.map((subMenuItem, subMenuItemIndex)=>{
                    return <SubMenuItem className={(activeSubMenuItem && (activeSubMenuItem.title === subMenuItem.title))
                        ? "active sub-menu-item":"sub-menu-item"}
                                        key={subMenuItem.title} index={subMenuItemIndex}
                                        onClick={(e)=>handleSubMenuItemClick(e,subMenuItem, subMenuItemIndex)}>
                        <SubMenuLink href="#">
                            <i className="menu-item-icon">{subMenuItem.icon}</i>
                            <SubMenuText className="menu-text">{subMenuItem.title}</SubMenuText>
                        </SubMenuLink>
                    </SubMenuItem>
                })}
            </>
        );

}

export default SubMenu;