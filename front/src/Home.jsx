import React from "react";
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import CopyrightFooter from './Layout/Footer/CopyrightFooter';
import Carousel from './Component/SocialMedia/Carousel';

import './App.css'

function Home() {
    return (
        <>
            <Header />
            <div className="Home-Background" id="Home">
                <div className="App-header">
                    <div className="text-center">
                        <p className="App-font">مدیریت هوشمند با </p>
                        <p className="App-font-logo">شکوفالند</p>
                        <button className="btn btn-light">شروع کنید</button>
                    </div>
                </div>
            </div>
            <Carousel />
            <Footer />
            <CopyrightFooter />
        </>
    )
}
export default Home;