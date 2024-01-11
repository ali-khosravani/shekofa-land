import React from "react";
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import CopyrightFooter from '../../layouts/Footer/CopyrightFooter';

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