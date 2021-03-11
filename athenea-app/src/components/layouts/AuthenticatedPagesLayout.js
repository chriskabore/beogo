import React, {Fragment, useState} from 'react';
import Footer from "../../pages/footer/Footer";
import SignedInHeader from "../../pages/headers/SignedInHeader";
import {withTranslation} from "react-i18next";
import SideBar from "../sidebar/SideBar";

const AuthenticatedPagesLayout = ({children}) => {
         const [displaySideBar, setDisplaySideBar] = useState(false);
         const [displayToggle, setDisplayToggle] = useState(true);

        return (
            <>
                <Fragment>
                   <SignedInHeader
                       displaySideBar={displaySideBar}
                       setDisplaySideBar={setDisplaySideBar}
                       displayToggle={displayToggle}
                       setDisplayToggle={setDisplayToggle}/>
                    <div className="container-fluid px-0">
                        <div className="row">
                            <SideBar displaySideBar={displaySideBar}
                                     setDisplaySideBar={setDisplaySideBar}
                                     displayToggle={displayToggle}
                                     setDisplayToggle={setDisplayToggle}/>
                            <div className="col-md-10">
                                <main>{children}</main>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </Fragment>
            </>
        );
  }

export default withTranslation() (AuthenticatedPagesLayout);