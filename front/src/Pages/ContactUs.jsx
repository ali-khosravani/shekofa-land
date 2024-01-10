import React from "react";
import Header from './Layout/Header/Header';

import StickyFooter from './Layout/Footer/StickyFooter';

import './App.css';

function ContactUs() {
    return(
        <>
       <Header/>
        <div className="App">
            <div className="App-header">
            Contact Us
            </div>
        </div>     
        <StickyFooter/>   
        </>        
    )
}
export default ContactUs;