import React, {Fragment} from 'react';


const AuthenticatedPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                   <header><h2>header</h2></header>
                    <div className="container">
                        <nav><p>navigation</p></nav>
                        <main>{children}</main>
                    </div>
                    <footer>footer</footer>
                </Fragment>
            </>
        );
  }

export default AuthenticatedPagesLayout;