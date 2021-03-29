import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";

const Payments = ()=>  {
    useEffect(() => {
        document.title = Constants.PAYMENTS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Payments</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Payments;