import React , {useEffect} from "react";
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';

import './Support.css';

function Support() {
  useEffect(()=>{
    document.title = 'پشتیبانی'
  },[])
    return(
        <>
       <Header/>
        <div className="App-header">           
          Support
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Support;