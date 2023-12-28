import React from "react";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CopyrightFooter from './Component/Footer/CopyrightFooter';

function About() {
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
export default About;