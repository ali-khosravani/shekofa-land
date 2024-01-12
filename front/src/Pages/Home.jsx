import React ,{useEffect} from "react";
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
import Carousel from 'components/SocialMedia/Carousel';

import 'App.css'

function Home() {
    useEffect(()=>{
        document.title = 'صفحه نخست'
    },[])
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