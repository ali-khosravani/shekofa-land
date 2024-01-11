import React from "react";
import Header from 'layouts/Header/Header';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
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