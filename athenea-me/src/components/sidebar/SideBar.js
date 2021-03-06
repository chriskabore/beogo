import React from 'react';
import * as Constant from '../../helpers/constants/index';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import {SideBarToggle} from "../../components/sidebar/SideBarToggle";
import Menu from '../../components/sidebar/Menu';

const SideBarNav = styled.nav`
    background: #43425D;
    border-top: 3px solid #9160A6;
    color: #ffffff;
    padding:0;
    display:flex;
    flex-direction: column; 
    align-items: center;
    max-width: 21%;
    width: 100%;
    position:fixed;
    justify-content:flex-start;
    transition:350ms;
    z-index:1;
    top:5.28rem;
    max-height: 100%;
    height: 83.5%;
    overflow-y:auto;
    left:${({displaySideBar})=>(displaySideBar? '0':'-100%')}
`;

const SideBarWrap = styled.div`
    min-width:100%;
    min-height: 100%
`;

const CloseSideBarText= styled.span`
 color:#ffffff;
 font-weight:200;
 font-size:1rem;
 margin-right:0.4rem;
  
 &:hover{
  color:#9160A6;
 }
 
`;

const SideBar = (props)=>  {

    const { t } = useTranslation(Constant.TRANSLATION_PARAM);

    let displaySideBar = props.displaySideBar || false;

    const showSideBar = () => {
        props.setDisplaySideBar(false);
        props.setDisplayToggle(true);
    }

    return (
        <>
            <SideBarNav displaySideBar={displaySideBar}>
                <SideBarWrap>
                    <SideBarToggle className="close-toggle" to="#" onClick={showSideBar}>
                        <CloseSideBarText>{t('sidebar.close')}</CloseSideBarText>
                        <i className="close-sidebar-toggle-icon"><AiIcons.AiFillCaretLeft/></i>
                    </SideBarToggle>
                    <Menu/>
                </SideBarWrap>
            </SideBarNav>
        </>
    );
}

export default SideBar;