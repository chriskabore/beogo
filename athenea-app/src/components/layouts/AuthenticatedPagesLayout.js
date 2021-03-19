import React, {Fragment, useState} from 'react';
import Footer from "../../pages/footer/Footer";
import SignedInHeader from "../../pages/headers/SignedInHeader";
import {withTranslation} from "react-i18next";
import SideBar from "../sidebar/SideBar";

const AuthenticatedPagesLayout = ({children}) => {
         const [displaySideBar, setDisplaySideBar] = useState(true);
         const [displayToggle, setDisplayToggle] = useState(false);

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
                            <div className={displaySideBar ? 'col-md-3 px-0': 'd-none'}>
                                <SideBar displaySideBar={displaySideBar}
                                         setDisplaySideBar={setDisplaySideBar}
                                         displayToggle={displayToggle}
                                         setDisplayToggle={setDisplayToggle}/>
                            </div>
                            <div className={displaySideBar ?'col-md-9 pt-3 pl-0 pr-3':'col-md-12 pl-8 pt-3'}>
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