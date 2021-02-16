import React, {Component} from 'react';
import AuthLayout from "../../layouts/AtheneaLayout";

const NotFound = props => {
    return(
        <AuthLayout className="page not-found">
            <h2>404 Not Found</h2>
        </AuthLayout>
    );
}

export default NotFound;