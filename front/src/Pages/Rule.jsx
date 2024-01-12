import React,{useEffect} from "react";
import Header from 'layouts/Header/Header';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';
import './Pages.css';

function Rule() {
    useEffect(()=>{
        document.title='قوانین'
    },[])
    return(
        <>
       <Header/>
        <div className="App-header">           
            Rule
        </div>      
        <CopyrightFooter/>
        </>
    )
}
export default Rule;