import React, {Component} from 'react';
import FooterComponent from "../components/layout/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "../pages/login/LoginPage";

const LoginLayout = ({match}) =>  {

        return (
            <div className="login">

                <Switch>
                    <Route
                        exact path={`${match.path}`}
                        render={(props) => <LoginPage {...props} /> }/>
                    />
                </Switch>
                <FooterComponent/>
            </div>
        );

}

export default LoginLayout;