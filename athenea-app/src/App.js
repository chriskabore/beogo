import React, {Suspense, Component, useEffect} from 'react';
import './App.css';
import './css/athenea.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotFound from "./pages/404/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/projects/Projects";
import UserPreferences from "./pages/users/user/preferences/UserPreferences";
import Settings from "./pages/settings/Settings";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import AuthenticatedRoute from "./utils/routes/AuthenticatedRoute";
import AuthorizedRoute from "./utils/routes/AuthorizedRoute";
import * as Constants from './utils/constants';
import {ROLE_ADMIN} from "./utils/constants";
import ActionPlans from "./pages/projects/ActionPlans";
import Actions from "./pages/projects/Actions";
import Activities from "./pages/projects/Activities";
import Budgets from "./pages/budgets/Budgets";
import BudgetLines from "./pages/budgets/BudgetLines";
import Payments from "./pages/budgets/Payments";
import Procurements from "./pages/procurements/Procurements";
import ProcurementPlans from "./pages/procurements/ProcurementPlans";
import Contracts from "./pages/procurements/Contracts";
import Invoices from "./pages/procurements/Invoices";
import Indicators from "./pages/indicators/Indicators";
import IndicatorsOfImpact from "./pages/indicators/IndicatorsOfImpact";
import IndicatorsOfResult from "./pages/indicators/IndicatorsOfResults";
import IndicatorsOfEvaluation from "./pages/indicators/IndicatorsOfEvaluation";
import Stakeholders from "./pages/stakeholders/Stakeholders";
import Beneficiaries from "./pages/stakeholders/Beneficiaries";
import Suppliers from "./pages/stakeholders/Suppliers";
import Supervisors from "./pages/stakeholders/Supervisors";
import Messages from "./pages/messages/Messages";
import ComposeEmail from "./pages/messages/ComposeEmail";
import Inbox from "./pages/messages/Inbox";
import Sent from "./pages/messages/Sent";
import Trash from "./pages/messages/Trash";
import Notifications from "./pages/notifications/Notifications";
import Users from "./pages/users/Users";
import Permissions from "./pages/settings/Permissions";
import UserProfile from "./pages/users/user/profile/UserProfile";
import {getCurrentUserAuthDetails, loadUserInfo} from "./services/UserService";





function Athenea () {

    let isUserAuthorized = false;
    let isUserAuthenticated = false;


    useEffect(() => {
        let authenticatedUser = getCurrentUserAuthDetails();
        if(authenticatedUser){
            isUserAuthenticated = true;
            if(authenticatedUser.roles.includes(ROLE_ADMIN)){
                isUserAuthorized = true;
            }
        }
        if(authenticatedUser){
            loadUserInfo(authenticatedUser.emailAddress);
        }

    });




  return (
    <>
        <Router>
            <Switch>
                <Route exact path={Constants.SIGNUP_PATHNAME} component={SignUp} />
                <Route exact path={Constants.SIGNIN_PATHNAME} component={SignIn} />
                <AuthenticatedRoute exact path={Constants.DASHBOARD_PATHNAME} component={Dashboard} />
                <AuthenticatedRoute exact path={Constants.PROJECTS_PATHNAME} component={Projects} />
                <AuthenticatedRoute exact path={Constants.ACTION_PLANS_PATHNAME} component={ActionPlans} />
                <AuthenticatedRoute exact path={Constants.ACTIONS_PATHNAME} component={Actions} />
                <AuthenticatedRoute exact path={Constants.ACTIVITIES_PATHNAME} component={Activities} />
                <AuthenticatedRoute exact path={Constants.BUDGETS_PATHNAME} component={Budgets} />
                <AuthenticatedRoute exact path={Constants.BUDGET_LINES_PATHNAME} component={BudgetLines} />
                <AuthenticatedRoute exact path={Constants.PAYMENTS_PATHNAME} component={Payments} />
                <AuthenticatedRoute exact path={Constants.PROCUREMENTS_PATHNAME} component={Procurements} />
                <AuthenticatedRoute exact path={Constants.PROCUREMENTS_PLANS_PATHNAME} component={ProcurementPlans} />
                <AuthenticatedRoute exact path={Constants.CONTRACTS_PATHNAME} component={Contracts} />
                <AuthenticatedRoute exact path={Constants.INVOICES_PATHNAME} component={Invoices} />
                <AuthenticatedRoute exact path={Constants.INDICATORS_PATHNAME} component={Indicators} />
                <AuthenticatedRoute exact path={Constants.INDICATORS_OF_IMPACT_PATHNAME} component={IndicatorsOfImpact} />
                <AuthenticatedRoute exact path={Constants.INDICATORS_OF_RESULTS_PATHNAME} component={IndicatorsOfResult} />
                <AuthenticatedRoute exact path={Constants.INDICATORS_OF_EVAL_PATHNAME} component={IndicatorsOfEvaluation} />
                <AuthenticatedRoute exact path={Constants.STAKEHOLDERS_PATHNAME} component={Stakeholders} />
                <AuthenticatedRoute exact path={Constants.BENEFICIARIES_PATHNAME} component={Beneficiaries} />
                <AuthenticatedRoute exact path={Constants.SUPPLIERS_PATHNAME} component={Suppliers} />
                <AuthenticatedRoute exact path={Constants.SUPERVISORS_PATHNAME} component={Supervisors} />
                <AuthenticatedRoute exact path={Constants.MESSAGES_PATHNAME} component={Messages} />
                <AuthenticatedRoute exact path={Constants.COMPOSE_EMAIL_PATHNAME} component={ComposeEmail} />
                <AuthenticatedRoute exact path={Constants.INBOX_PATHNAME} component={Inbox} />
                <AuthenticatedRoute exact path={Constants.SENT_PATHNAME} component={Sent} />
                <AuthenticatedRoute exact path={Constants.TRASH_PATHNAME} component={Trash} />
                <AuthenticatedRoute exact path={Constants.NOTIFICATIONS_PATHNAME} component={Notifications} />
                <AuthenticatedRoute exact path={Constants.PREFERENCES_PATHNAME} component={UserPreferences} />
                <AuthenticatedRoute exact path={Constants.PROFILE_PATHNAME} component={UserProfile} />
                <AuthenticatedRoute exact path={Constants.SETTINGS_PATHNAME} component={Settings} />
                <AuthenticatedRoute exact path={Constants.USERS_PATHNAME} component={Users} />
                <AuthorizedRoute isAuthorized={isUserAuthorized} exact path={Constants.PERMISSIONS_PATHNAME} component={Permissions} />
                <Route
                    exact
                    path={Constants.HOME_PATHNAME}
                    render={() => {
                        return (
                            isUserAuthenticated ?
                                <Redirect to={Constants.DASHBOARD_PATHNAME} /> :
                                <Redirect to={Constants.SIGNIN_PATHNAME} />
                        )
                    }}
                />
                <Route path={Constants.ALL_PATHS} component={NotFound} />
            </Switch>
        </Router>
    </>
  );
};

export default function  App(){

  return(
          <Suspense fallback={<div>Loading...</div>}>
              <Athenea />
          </Suspense>
  );
};
