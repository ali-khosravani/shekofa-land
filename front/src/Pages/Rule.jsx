import React from "react";
import Header from '../Layout/Header/Header';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';
import './Pages.css';

function Rule() {
    return(
        <>
       <Header/>
        <div className="App-header">           
            Rule
        </div>      
        <CopyrightFooter/>
        </>
    )
}
export default Rule;