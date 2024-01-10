import React from "react";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CopyrightFooter from '../Layout/Footer/CopyrightFooter';

import './Blog.css';

function Blog() {
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