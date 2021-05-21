import React, {useEffect, useState} from 'react';
import PublicPagesLayout from "../../components/layouts/PublicPagesLayout";
import * as Constants from "../../utils/constants";
import SignInCard from "../../components/authentication/SignInCard";
import {useHistory} from 'react-router-dom';
import {setUserSession} from "../../services/AuthService";
import {loadUserInfo, storeCurrentUserInfoToSession} from "../../services/UserService";


const SignIn = (props) =>{


    useEffect(() => {
        document.title = Constants.SIGNIN_PAGE_TITLE;
        storeAuthDetails();
        storeCurrentUserInfo();

    });

    let history = useHistory(props);

    let landingPagePath = Constants.DASHBOARD_PATHNAME;

    const [isCurrentUserInfoLoaded, setIsCurrentUserInfoLoaded]=useState(false);
    const [currentUserInfo, setCurrentUserInfo]=useState();
    const[authDetails, setAuthDetails] = useState();
    const[isRedirect, setIsRedirect] = useState(false);


    const getAuthDetails = (authUserDetailsVal)=>{
        if(authUserDetailsVal){
            setAuthDetails(authUserDetailsVal);
        }
    }

    const getIsRedirect = (isRedirectVal)=>{
        setIsRedirect(isRedirectVal);
    }

    const redirectToLandingPage = (location)=>{

        if(location){
            history.push(location);
        }

    }


    const storeAuthDetails = ()=>{
        if(authDetails){
            setUserSession(authDetails);
            if(isRedirect){
                redirectToLandingPage(landingPagePath);
            }
        }
    }

    const storeCurrentUserInfo= ()=>{
        if(!isCurrentUserInfoLoaded && authDetails){
           loadCurrentUserInfo(authDetails).then((info)=>{
               console.log("userInfo from storeCurrentUserInfo:",info);
           });
           setIsCurrentUserInfoLoaded(true);

        }

    }

    const loadCurrentUserInfo = async (userDetails)=>{
        if(userDetails){
            let emailAddress =  userDetails.emailAddress;
            let userInfo = await loadUserInfo(emailAddress);
            return userInfo;
        }
    }

    return (
        <>
            <PublicPagesLayout>
                <SignInCard  authUserDetails={getAuthDetails} isRedirect={getIsRedirect} {...props}/>
            </PublicPagesLayout>
        </>
    );
}

export default SignIn;