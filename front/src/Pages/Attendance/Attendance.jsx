import React,{useEffect} from "react";
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';


import './Attendance.css';

function Attendance() {
    useEffect(()=>{
        document.title=`${process.env.REACT_APP_TITLE}کنترل تردد`
    },[])
    return(
        <>
       <Header/>
        <div className="App-header">
            Attendance
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Attendance;