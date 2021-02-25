import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";
import {withTranslation} from "react-i18next";
import Header from "../../pages/headers/Header";

const PublicPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                    <Header/>
                    <div className="container-fluid">
                        <main>{children}</main>
                        <Footer/>
                    </div>
                </Fragment>
            </>
        );

}

export default withTranslation() (PublicPagesLayout);