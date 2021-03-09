import React, {useEffect,useState} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import SignInCard from "../../components/authentication/SignInCard";


const SignIn = (props) =>{

    useEffect(() => {
        document.title = Constants.SIGNIN_PAGE_TITLE;
    });

    return (
            <>
                <PublicPagesLayout>
                   <SignInCard {...props}/>
                </PublicPagesLayout>
            </>
        );

}

export default SignIn;