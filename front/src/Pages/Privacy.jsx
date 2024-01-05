import React from "react";
import Header from '../Layout/Header/Header';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';
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