import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Suppliers = ()=>  {
    useEffect(() => {
        document.title = Constants.SUPPLIERS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Suppliers</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Suppliers;