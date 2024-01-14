import React,{useEffect} from "react";
import './Login.css';


function Register() {
    useEffect(()=>{
        document.title =`${process.env.REACT_APP_TITLE}ثبت نام`
    },[])
    return(
        <>
        <div className="App-header">
            Register
        </div>
        </>
    );
}
export default Register;