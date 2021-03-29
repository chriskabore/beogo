import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Suppliers = ()=>  {
    useEffect(() => {
        document.title = Constants.SUPPLIERS_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Suppliers</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Suppliers;