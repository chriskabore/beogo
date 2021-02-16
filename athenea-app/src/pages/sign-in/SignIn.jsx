import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Auth from "../../utils/authentication/Auth";
import {Route, Redirect} from 'react-router-dom';


const SignIn = props => {
    if(Auth.getAuth()){
        return <Redirect to={"/dashboard"}/>
    }else{
        return(
            <AuthLayout className="page sign-in">
                <h2>Sign In</h2>
            </AuthLayout>
        );
    }

}
export default SignIn;