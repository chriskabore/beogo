import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";
import {withTranslation} from "react-i18next";

const PublicPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                    <div className="container-fluid">
                        <main>{children}</main>
                        <Footer/>
                    </div>
                </Fragment>
            </>
        );

}

export default withTranslation() (PublicPagesLayout);