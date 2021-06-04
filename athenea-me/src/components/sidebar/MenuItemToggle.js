import React from 'react';

const MenuItemToggle = (props)=> {
    const {menuItem,isActive,displaySubMenu} = props;
    return (
        <>
                <span className={menuItem && (menuItem.badge || menuItem.subMenu)? "menu-item-toggle":"d-none"}>
                    {menuItem && menuItem.badge ? menuItem.badge:null}
                    {menuItem && menuItem.subMenu && isActive && displaySubMenu? menuItem.iconOpen : (menuItem && menuItem.subMenu)? menuItem.iconClosed:null}
                </span>
        </>
    );

}

export default MenuItemToggle;