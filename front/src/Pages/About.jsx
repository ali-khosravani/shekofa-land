import React from "react";
import Header from 'layouts/Header/Header';
import StickyFooter from 'layouts/Footer/StickyFooter';

function About() {
    return (
        <>
            <Header />
            <div className="App">
                <div className="App-header">
                About
                </div>
            </div>
            <StickyFooter/>             
        </>
    )
}
export default About;