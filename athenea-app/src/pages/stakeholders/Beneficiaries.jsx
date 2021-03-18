import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Beneficiaries = ()=>  {
    useEffect(() => {
        document.title = Constants.BENEFICIARIES_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Beneficiaries</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Beneficiaries;