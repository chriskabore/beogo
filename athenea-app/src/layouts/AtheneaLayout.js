import React from 'react';
import {Container} from "react-bootstrap";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";


const AtheneaLayout = props =>{

    return(
       <div className="athenea-layout-container">
           <Header/>
           <main role="main" className={`athenea-layout ${props.className !== undefined ? props.className : ''}`}>
               <Container fluid>
                   <div className="row">
                        <div className="col-md-3">
                            <SideBar/>
                        </div>
                       <div className="col-md-9">
                           <Container fluid>
                               {props.children}
                           </Container>
                       </div>
                   </div>
               </Container>
           </main>
           <Footer />
       </div>
    );
}
export default AtheneaLayout;