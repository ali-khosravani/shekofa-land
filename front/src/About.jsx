import React from "react";
import Header from './Layout/Header/Header';
import StickyFooter from './Layout/Footer/StickyFooter';

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