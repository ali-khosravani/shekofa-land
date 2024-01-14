import React,{useEffect} from "react";
import './Login.css';

function Login() {
    useEffect(()=>{
        document.title =`${process.env.REACT_APP_TITLE}ورود به سایت`
    },[])
    return(
        <>
        <div className="App-header">
            Login
        </div>
        </>
    );
}
export default Login;