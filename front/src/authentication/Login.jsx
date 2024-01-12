import React,{useEffect} from "react";
import './Login.css';

function Login() {
    useEffect(()=>{
        document.title = 'ورود به سایت'
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