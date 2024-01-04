import React from "react";

import Header from '../Layout/Header/Header';
import StickyFooter from '../Layout/Footer/StickyFooter';

import './Pages.css';

function Faq() {
    return(
        <>
       <Header/>
        <div className="App">
        <div className="App-header">
            Faq
        </div>
        </div>
        <StickyFooter/>
        </>
    )
}
export default Faq;