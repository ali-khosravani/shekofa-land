import React from "react";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';


import './Attendance.css';

function Attendance() {
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