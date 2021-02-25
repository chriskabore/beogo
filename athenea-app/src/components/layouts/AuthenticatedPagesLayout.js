import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";
import SignedInHeader from "../../pages/headers/SignedInHeader";
import {withTranslation} from "react-i18next";

const AuthenticatedPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                   <SignedInHeader/>
                    <div className="container-fluid">
                        <nav><p>navigation</p></nav>
                        <main>{children}</main>
                    </div>
                    <Footer/>
                </Fragment>
            </>
        );
  }

export default withTranslation() (AuthenticatedPagesLayout);