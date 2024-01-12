import React,{useEffect} from "react";
import './Login.css';


function Register() {
    useEffect(()=>{
        document.title = 'ثبت نام'
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