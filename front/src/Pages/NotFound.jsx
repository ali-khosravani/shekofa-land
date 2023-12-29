import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return(
        <>
       
        <div className="App-header">
            
            <p className="App-font">متاسفیم!!! صفحه مورد نظر شما را پیدا نکردیم.</p>
            <p><Link to="/">صفحه نخست</Link></p>
            <p className="App-font-logo">شکوفالند</p>
        </div>
       
        </>
    )
}
export default Home;