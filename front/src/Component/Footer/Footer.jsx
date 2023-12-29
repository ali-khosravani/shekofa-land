import './Footer.css'

function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>با شکوفالند</div>
                    <div>
                    <ul className='list-unstyled'>
                        <li className='pt-5'>بلاگ</li>
                        <li className='pt-3'>درباره ما</li>
                        <li className='pt-3'>ارتباط با ما</li>
                    </ul>
                    </div>
                </div>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>خدمات مشتریان</div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='pt-5'>سوالات متداول</li>
                            <li className='pt-3'>حریم خصوصی</li>
                            <li className='pt-3'>قوانین سایت</li>
                        </ul>
                    </div>
                </div>
                <div className='footer justify-content-center  text-center col-sm-12 col-md-6 col-lg-3 pt-3'>
                    <div className='shortcutFooter'>راهنمای خرید</div>
                    <div>
                        <ul className='list-unstyled'>
                            <li className='pt-5'>درخواست دمو</li>
                            <li className='pt-3'>ثبت سفارش</li>
                            <li className='pt-3'>سفارشی سازی نرم افزار</li>
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