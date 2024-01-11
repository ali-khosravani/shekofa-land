import React from "react";

import Header from 'layouts/Header/Header';
import StickyFooter from 'layouts/Footer/StickyFooter';

import './Pages.css';

function Faq() {
    return(
        <>
       <Header/>
        
        <div className="App-header">
            Faq
        </div>
        
        <StickyFooter/>
        </>
    )
}
export default Faq;