import React from "react";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';

function Rule() {
    return(
        <>
       <Header/>
        <div className="App-header">
            
            <p className="App-font">نرم افزار حضور و غیاب - کنترل تردد - نرم افزار پارکینگ</p>
            <p className="App-font-logo">شکوفالند</p>
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Rule;