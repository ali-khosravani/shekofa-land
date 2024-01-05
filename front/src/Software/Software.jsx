import React from "react";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';
import './Software.css';

function Software() {
    return(
        <>
       <Header/>
        <div className="App-header">
            Software           
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Software;