import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Invoices = ()=>  {
    useEffect(() => {
        document.title = Constants.INVOICES_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Invoices</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Invoices;