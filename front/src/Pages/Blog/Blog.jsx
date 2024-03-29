import React ,{useEffect} from "react";
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import CopyrightFooter from 'layouts/Footer/CopyrightFooter';

import './Blog.css';

function Blog() {
  useEffect(()=>{
    document.title=`${process.env.REACT_APP_TITLE}بلاگ`
  },[])
    return(
        <>
       <Header/>
        <div className="App-header">           
          Blog
        </div>
        <Footer/>
        <CopyrightFooter/>
        </>
    )
}
export default Blog;