import React from "react";
import './SocialMedia.css'
import * as Icon from 'react-bootstrap-icons';

function SocialMedia() {
    return(
        <div className="SocialMedia container-fluid">
            <div className="row">
            <div className="col-lg-6">شماره تماس :09127622665</div> 
            <div className="col-lg-6">
                <Icon.Whatsapp className="p-1" size={36} />
                <Icon.Telegram className="p-1" size={36}/>
                <Icon.GooglePlay className="p-1" size={36}/></div>            
            
            </div>
            
        </div>
    );
}
export default SocialMedia;