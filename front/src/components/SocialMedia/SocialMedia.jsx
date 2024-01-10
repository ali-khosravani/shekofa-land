import React from "react";
import { Link } from 'react-router-dom';
import './SocialMedia.css'

function SocialMedia() {
    return (
        <div className="SocialMedia container-fluid fixed-top mt-2">
            <div className="row">
                <div className="col-lg-6">شماره تماس :09127622665</div>
                <div className="col-lg-6 social-links">
                    <Link to="/" className="twitter"><i class="bx bxl-twitter"></i></Link>
                    <Link to="/" className="facebook"><i class="bx bxl-facebook"></i></Link>
                    <Link to="/" className="instagram"><i class="bx bxl-instagram"></i></Link>
                    <Link to="/" classN="google-plus"><i class="bx bxl-skype"></i></Link>
                    <Link to="/" classn="linkedin"><i class="bx bxl-linkedin"></i></Link>
                </div>
            </div>
        </div>
    );
}
export default SocialMedia;