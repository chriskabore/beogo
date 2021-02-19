import React, {Fragment} from 'react';
import Footer from "../../pages/footer/Footer";


const AuthenticatedPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                   <header><h2>header</h2></header>
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