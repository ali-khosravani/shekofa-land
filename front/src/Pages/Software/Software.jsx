import React from "react";
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
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