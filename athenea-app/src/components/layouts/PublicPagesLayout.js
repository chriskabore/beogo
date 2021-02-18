import React, {Fragment} from 'react';

const PublicPagesLayout = ({children}) => {
        return (
            <>
                <Fragment>
                    <div className="container">
                        <main>{children}</main>
                        <footer>footer</footer>
                    </div>
                </Fragment>
            </>
        );

}

export default PublicPagesLayout;