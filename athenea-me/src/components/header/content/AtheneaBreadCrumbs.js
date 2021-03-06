import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography} from '@material-ui/core';
import * as Constant from '../../../helpers/constants/index';
import {useTranslation} from "react-i18next";


const BreadcrumbsWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  width:100%;
  height:2rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-left: 0.4rem;  
 `;

const AtheneaBreadCrumbs = (props)=>  {
    const { t} = useTranslation(Constant.TRANSLATION_PARAM);
    const {location :{pathname},
        history} = props;
    const pathNames = pathname.split('/').filter(x =>x);

    let pathLabels = new Map();

    pathLabels.set("sign-in", `${t(Constant.SIGN_IN_MSG_PROP)}`);
    pathLabels.set("sign-up", `${t(Constant.SIGN_OUT_MSG_PROP)}`);
    pathLabels.set("dashboard", `${t(Constant.SIDEBAR_MENU_DASHBOARD_MSG_PROP)}`);
    pathLabels.set("settings", `${t(Constant.SIDEBAR_MENU_SETTINGS_MSG_PROP)}`);
    pathLabels.set("preferences", `${t('sidebar.menu.settings')}`);
    pathLabels.set("budgets", `${t('sidebar.menu.budgets')}`);
    pathLabels.set("budget-lines", `${t('sidebar.submenu.budget-lines')}`);
    pathLabels.set("payments", `${t('sidebar.submenu.payments')}`);
    pathLabels.set("procurements", `${t('sidebar.menu.procurements')}`);
    pathLabels.set("procurement-plans", `${t('sidebar.submenu.procurement-plans')}`);
    pathLabels.set("contracts", `${t('sidebar.submenu.contracts')}`);
    pathLabels.set("invoices", `${t('sidebar.submenu.invoices')}`);
    pathLabels.set("indicators", `${t('sidebar.menu.indicators')}`);
    pathLabels.set("indicators-of-impact", `${t('sidebar.submenu.indicators-of-impact')}`);
    pathLabels.set("indicators-of-results", `${t('sidebar.submenu.indicators-of-results')}`);
    pathLabels.set("indicators-of-evaluation", `${t('sidebar.submenu.indicators-of-evaluation')}`);
    pathLabels.set("stakeholders", `${t('sidebar.menu.stakeholders')}`);
    pathLabels.set("beneficiaries", `${t('sidebar.submenu.beneficiaries')}`);
    pathLabels.set("suppliers", `${t('sidebar.submenu.suppliers')}`);
    pathLabels.set("supervisors", `${t('sidebar.submenu.supervisors')}`);
    pathLabels.set("messages", `${t('sidebar.menu.messages')}`);
    pathLabels.set("inbox", `${t('sidebar.submenu.inbox')}`);
    pathLabels.set("compose", `${t('sidebar.submenu.compose-mail')}`);
    pathLabels.set("sent", `${t('sidebar.submenu.sent')}`);
    pathLabels.set("trash", `${t('sidebar.submenu.trash')}`);
    pathLabels.set("users", `${t('sidebar.submenu.users')}`);
    pathLabels.set("permissions", `${t('sidebar.submenu.permissions')}`);
    pathLabels.set("notifications", `${t('sidebar.menu.notifications')}`);
    pathLabels.set("projects", `${t('sidebar.menu.projects')}`);
    pathLabels.set("action-plans", `${t('sidebar.submenu.action-plans')}`);
    pathLabels.set("actions", `${t('sidebar.submenu.actions')}`);
    pathLabels.set("activities", `${t('sidebar.submenu.activities')}`);

    return (
        <>
            <BreadcrumbsWrap>
                <MUIBreadcrumbs aria-label="breadcrumb">
                    { (pathNames.length >0 ) ?
                        (<Link onClick={() =>history.push(Constant.HOME_PATHNAME)}>Athenea M&E</Link>) :
                        (<Typography>Athenea M&E</Typography>)
                    }

                    {pathNames.map((name, index)=>{
                        const routeTo = `/${pathNames.slice(0, index +1).join(Constant.HOME_PATHNAME)}`;
                        const isLast = index === pathNames.length -1;
                        return isLast ? (<Typography key={name}>{pathLabels.has(name) ? pathLabels.get(name) : name}</Typography>)  :(<Link  key={name} onClick={() =>history.push(routeTo)}>{pathLabels.has(name) ? pathLabels.get(name) : name}</Link>);
                    })}
                </MUIBreadcrumbs>
            </BreadcrumbsWrap>
        </>
    );
}

export default withRouter(AtheneaBreadCrumbs);