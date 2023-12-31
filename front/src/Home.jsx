import React from "react";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CopyrightFooter from './Component/Footer/CopyrightFooter';
import Carousel  from './Component/SocialMedia/Carousel';
import SocialMedia from './Component/SocialMedia/SocialMedia';


function Home() {
    return (
        <>
            <Header />
            <div className="App-header">
                <p className="App-font">نرم افزار حضور و غیاب - کنترل تردد - نرم افزار پارکینگ</p>
                <p className="App-font-logo">شکوفالند</p>
            </div>
            <Carousel/>
            <SocialMedia/>
            <Footer />
            <CopyrightFooter />
        </>
    )
}
export default Home;