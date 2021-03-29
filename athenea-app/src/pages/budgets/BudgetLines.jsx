import React, {useEffect} from 'react';
import AuthenticatedPagesLayout from "../../components/layouts/AuthenticatedPagesLayout";
import * as Constants from "../../utils/constants";


const BudgetLines = ()=>  {
    useEffect(() => {
        document.title = Constants.BUDGET_LINES_PAGE_TITLE;
    });
    return (
        <>
            <AuthenticatedPagesLayout>
                <h3>BudgetLines</h3>
            </AuthenticatedPagesLayout>
        </>
    );

}

export default BudgetLines;