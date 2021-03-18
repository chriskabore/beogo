import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";
import AtheneaBreadCrumbs from "../../components/header/AtheneaBreadCrumbs";

const Procurements = ()=>  {
    useEffect(() => {
        document.title = Constants.PROCUREMENTS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <AtheneaBreadCrumbs/>
                <h3>Procurements</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Procurements;