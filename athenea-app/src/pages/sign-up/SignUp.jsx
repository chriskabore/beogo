import React, {useEffect} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import SignUpCard from "../../components/registration/SignUpCard";

const SignUp = (props) =>  {

    useEffect(() => {
        document.title = Constants.SIGNUP_PAGE_TITLE;
    });
        return (
            <>
                <PublicPagesLayout>
                    <SignUpCard {...props}/>
                </PublicPagesLayout>

            </>
        );
}

export default SignUp;