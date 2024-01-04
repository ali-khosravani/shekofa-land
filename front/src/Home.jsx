import React from "react";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CopyrightFooter from './Component/Footer/CopyrightFooter';
import Carousel from './Component/SocialMedia/Carousel';

import './App.css'

function Home() {
    return (
        <>
            <Header />
            <div className="Home-Background">
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