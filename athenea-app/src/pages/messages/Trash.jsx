import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const Trash = ()=>  {
    useEffect(() => {
        document.title = Constants.TRASH_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>Trash</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default Trash;