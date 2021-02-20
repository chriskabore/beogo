import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";
import Header from "../../pages/headers/Header";

const AuthenticatedPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                   <Header/>
                    <div className="container-fluid">
                        <nav><p>navigation</p></nav>
                        <main>{children}</main>
                    </div>
                    <Footer/>
                </Fragment>
            </>
        );
  }

export default AuthenticatedPagesLayout;