import React,{useEffect} from "react";
import Header from 'layouts/Header/Header';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
import './Pages.css';

function Privacy() {
    useEffect(()=>{
        document.title=`${process.env.REACT_APP_TITLE}حریم خصوصی`
    },[])
    return(
        <>
       <Header/>
        <div className="App-header">            
            Privacy
        </div>
        
        <CopyrightFooter/>
        </>
    )
}
export default Privacy;