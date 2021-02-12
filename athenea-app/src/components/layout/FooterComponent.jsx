import React, {Component} from 'react';
import {Trans} from "react-i18next";

class FooterComponent extends Component {
    render() {

        return (
            <div>

                <hr className="footer-separator"/>
                    <footer className="footer">
                        <div className="col-12 my-auto">
                            <p className="copyright float-md-right text-center my-auto">&copy;<span>{new Date().getFullYear()}</span>&nbsp;<Trans i18nKey="copyright">Copyright
                                BEOGOTECH SARL. All rights reserved.</Trans></p>
                        </div>
                    </footer>
            </div>
        );
    }
}

export default FooterComponent;