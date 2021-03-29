import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Contracts = ()=>  {
    useEffect(() => {
        document.title = Constants.CONTRACTS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Contracts</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Contracts;