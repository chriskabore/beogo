import React from 'react';
import {Trans,withTranslation} from "react-i18next";

const Footer = () => {

        return (
            <>

                <div className="row">
                    <div className="footer-wrap">
                        <hr className="footer-separator"/>
                        <footer className="footer container-fluid">
                            <div className="col-12 my-auto">
                                <p className="copyright float-md-right text-center my-auto">&copy;<span>{new Date().getFullYear()}</span>&nbsp;<Trans i18nKey="footer.copyright">Copyright
                                    BEOGOTECH SARL. All rights reserved.</Trans></p>
                            </div>
                        </footer>
                    </div>
                </div>
            </>
        );

}

export default Footer;