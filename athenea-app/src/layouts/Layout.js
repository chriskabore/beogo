import React, {Component} from 'react';
import FooterComponent from "../components/layout/FooterComponent";
import HeaderComponent from "../components/layout/HeaderComponent";
import SideBarComponent from "../components/layout/SideBarComponent";
import ContentComponent from "../components/layout/ContentComponent";
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PublicRoute from "../components/routing/PublicRoute";
import PrivateRoute from "../components/routing/PrivateRoute";
import AdminRoute from "../components/routing/AdminRoute";

const Layout =()=> {


        return (
            <div>
                <HeaderComponent/>
                <div className="row">
                    <div className="col-md-3">
                        <SideBarComponent/>
                    </div>
                    <div className="col-md-9">
                        <Router>
                            <Switch>

                                <PublicRoute restricted={true} component={Login} path="/" exact />


                                <PrivateRoute component={Home} path="/home" exact />
                                <PrivateRoute component={PageOne} path="/page-1" exact />
                                <PrivateRoute component={PageTwo} path="/page-2" exact />
                                <PrivateRoute component={NoMatch} path="*" />
                                <PublicRoute component={NoMatch} path="*" />
                            </Switch>
                        </Router>
                    </div>
                </div>
                <div>

                </div>
                <FooterComponent/>

            </div>
        );

}

export default Layout;