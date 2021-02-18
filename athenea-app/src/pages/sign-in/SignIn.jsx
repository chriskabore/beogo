import React, {useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";

const SignIn = () =>{
    useEffect(() => {
        document.title = Constants.SIGNIN_PAGE_TITLE;
    });
        return (
            <>
                <PublicPagesLayout>
                    <h2>Sign-in</h2>
                </PublicPagesLayout>
            </>
        );

}

export default SignIn;