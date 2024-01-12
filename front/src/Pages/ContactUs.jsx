import React ,{useEffect} from "react";
import Header from 'layouts/Header/Header';

import StickyFooter from 'layouts/Footer/StickyFooter';

import '../App.css';

function ContactUs() {
    useEffect(()=>{
        document.title = 'ارتباط با ما'
    } ,[])
    return(
        <>
       <Header/>
        <div className="App">
            <div className="App-header">
            Contact Us
            </div>
        </div>     
        <StickyFooter/>   
        </>        
    )
}
export default ContactUs;