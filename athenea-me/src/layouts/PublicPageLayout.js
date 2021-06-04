import React from 'react';
import PublicPageHeader from "../components/header/PublicPageHeader";
import Footer from "../components/footer/Footer";

const PublicPageLayout = ({children}) => {

        return (
            <>
                <PublicPageHeader/>
                <div className="container-fluid">
                    <main>
                        <div className="content-wrap">
                            {children}
                        </div>
                    </main>
                </div>
                <Footer/>
            </>
        );

}

export default PublicPageLayout;