import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import * as Constant from '../helpers/constants/index';
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";

const Routes = () => {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path={Constant.SIGN_IN_PATHNAME} component={SignIn} />
                        <Route exact path={Constant.SIGN_UP_PATHNAME} component={SignUp} />
                        <Route exact path={Constant.DASHBOARD_PATHNAME} component={Dashboard} />
                        <Route
                            exact
                            path={Constant.HOME_PATHNAME}
                            render={() => {
                                let isAuthenticated = false;
                                return(
                                   isAuthenticated ? <Redirect to={Constant.DASHBOARD_PATHNAME} /> :
                                       <Redirect to={Constant.SIGN_IN_PATHNAME} />
                                )
                            }}
                        />
                    </Switch>
                </Router>
            </>
        );
}

export default Routes;