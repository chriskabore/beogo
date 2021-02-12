import React, {Component} from 'react';
import FooterComponent from "../components/layout/FooterComponent";
import HeaderComponent from "../components/layout/HeaderComponent";
import SideBarComponent from "../components/layout/SideBarComponent";
import ContentComponent from "../components/layout/ContentComponent";
import {useState} from 'react';

const Layout =()=> {


        return (
            <div>
                <HeaderComponent/>
                <div className="row">
                    <div className="col-md-3">
                        <SideBarComponent/>
                    </div>
                    <div className="col-md-9">
                        <ContentComponent/>
                    </div>
                </div>
                <div>

                </div>
                <FooterComponent/>

            </div>
        );

}

export default Layout;