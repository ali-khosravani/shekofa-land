import React from "react";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';

import './Support.css';

function Support() {
    return(
        <>
       <Header/>
        <div className="App-header">           
          Support
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Support;