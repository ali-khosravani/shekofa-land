import React from "react";

import Parking from '../../assets/icon/Parking.png'
import SelfService from '../../assets/icon/SelfService.png'
import Attendance from '../../assets/icon/Attendance.png';
import Visitor from '../../assets/icon/Visitor.png';

function Carousel() {
    return(
        <div className='container-fluid'>
        <div className="row">
                <div className="col-lg-3 col-md-6">
                <img src={Attendance} alt='Home' width={96} height={96} />
                    <h2 className="fw-normal">کنترل تردد</h2>
                    <p>راهکاری جامع برای کنترل تردد در سازمان شما</p>
                    <p><a className="btn btn-secondary" href="#">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                <img src={Visitor} alt='Home' width={96} height={96} />
                    <h2 className="fw-normal">مراجعین</h2>
                    <p>راهنمایی مراجعه کننده به سازمان شما و عدم معطلی ارباب رجوع</p>
                    <p><a className="btn btn-secondary" href="#">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={Parking} alt='Home' width={96} height={96} />
                    <h2 className="fw-normal">پارکینگ</h2>
                    <p>نرم افزاری همه منظوره برای مدیریت پارکینگ ها</p>
                    <p><a className="btn btn-secondary" href="#">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={SelfService} alt='Home' width={96} height={96} />
                    <h2 className="fw-normal">سلف غذا خوری</h2>
                    <p>بهترین راهکار برای مدیریت سلف های غذا خوری</p>
                    <p><a className="btn btn-secondary" href="#">بیشتر &raquo;</a></p>
                </div>
            </div>
            </div>
    );
}
export default Carousel;