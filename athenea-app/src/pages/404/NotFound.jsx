import React, {useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from '../../utils/constants';


const NotFound = props => {
    useEffect(() => {
        document.title = Constants.NOTFOUND_PAGE_TITLE;
    });

    return(
        <>
            <PublicPagesLayout>
                <h2>404 Not Found</h2>
            </PublicPagesLayout>
        </>

    );
}

export default NotFound;