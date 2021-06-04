import React from 'react';
import {Trans} from "react-i18next";

const Footer = () =>  {
    return (
        <>

            <div className="row footer-row">
                <div className="footer-wrap container-fluid">
                    <hr className="footer-separator"/>
                    <footer className="footer">
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