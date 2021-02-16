import React from 'react';
import {Container} from 'react-bootstrap';

import Footer from "../components/layout/Footer";

const AuthLayout = props =>{
    return(
       <div className="auth-layout-container">
           <main role="main" className={`auth-layout ${props.className !== undefined ? props.className : ''}`}>
               <Container fluid>
                   {props.children}
               </Container>
           </main>
           <Footer />
       </div>

    );
}



export default AuthLayout;