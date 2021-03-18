import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Contracts = ()=>  {
    useEffect(() => {
        document.title = Constants.CONTRACTS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Contracts</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Contracts;