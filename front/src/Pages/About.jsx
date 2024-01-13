import React , {useEffect} from "react";
import Header from 'layouts/Header/Header';
import StickyFooter from 'layouts/Footer/StickyFooter';

function About() {
    useEffect(()=>{
        document.title = `${process.env.REACT_APP_TITLE}در باره ما`
    },[])
    return (
        <>
            <Header />
            <div className="App">
                <div className="App-header">
                About
                </div>
            </div>
            <StickyFooter/>             
        </>
    )
}
export default About;