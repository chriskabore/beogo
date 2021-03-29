import React, {Fragment, useState} from 'react';
import Footer from "../../pages/footer/Footer";
import SignedInHeader from "../../pages/headers/SignedInHeader";
import {withTranslation} from "react-i18next";
import SideBar from "../sidebar/SideBar";
import AtheneaBreadCrumbs from "../header/AtheneaBreadCrumbs";

const AuthenticatedPagesLayout = (props, {children}) => {
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
                            <div className={displaySideBar ? 'col-md-3 px-0 w-22': 'd-none'}>
                                <SideBar displaySideBar={displaySideBar}
                                         setDisplaySideBar={setDisplaySideBar}
                                         displayToggle={displayToggle}
                                         setDisplayToggle={setDisplayToggle} {...props}/>
                            </div>
                            <div className={displaySideBar ?'col-md-9 pt-3 pl-2 pr-3 w-88':'col-md-12 pl-8 pt-3'}>
                                <AtheneaBreadCrumbs/>
                                <div className="page-content">{children}</div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </Fragment>
            </>
        );
  }

export default withTranslation() (AuthenticatedPagesLayout);