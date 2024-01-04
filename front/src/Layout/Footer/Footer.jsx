import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>با شکوفالند</div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='nav-item pt-5 '><Link to="/Blog" className='text-decoration-none'>بلاگ</Link></li>
                            <li className='nav-item pt-3'><Link to="/About" className='text-decoration-none'>درباره ما</Link></li>
                            <li className='nav-item pt-3'><Link to="/ContactUs" className='text-decoration-none'>ارتباط با ما</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>خدمات مشتریان</div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='pt-5'><Link to="/Faq" className='text-decoration-none'>سوالات متداول</Link></li>
                            <li className='pt-3'><Link to="/Privacy" className='text-decoration-none'>حریم خصوصی</Link></li>
                            <li className='pt-3'><Link to="/Rule" className='text-decoration-none'>قوانین سایت</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>راهنمای خرید</div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='pt-5'><Link to="/Support" className='text-decoration-none'> درخواست دمو</Link></li>
                            <li className='pt-3'><Link to="/Hardware" className='text-decoration-none'>ثبت سفارش</Link></li>
                            <li className='pt-3'><Link to="/Software" className='text-decoration-none'>سفارشی سازی نرم افزار</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>مجوزها</div>
                </div>
            </div>
        </div>
    );
}
export default Footer;