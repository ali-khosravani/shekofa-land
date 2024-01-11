import React from "react";
import Header from 'layouts/Header/Header';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
import './Pages.css';

function Privacy() {
    return(
        <>
       <Header/>
        <div className="App-header">            
            Privacy
        </div>
        
        <CopyrightFooter/>
        </>
    )
}
export default Privacy;