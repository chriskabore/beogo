import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";
import {withTranslation} from "react-i18next";
import UnsignedInHeader from "../../pages/headers/UnsignedInHeader";

const PublicPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                    <UnsignedInHeader/>
                    <div className="container-fluid">
                        <main>
                            <div className="content-wrap">
                                {children}
                            </div>
                        </main>
                    </div>
                    <Footer/>
                </Fragment>
            </>
        );

}

export default withTranslation() (PublicPagesLayout);