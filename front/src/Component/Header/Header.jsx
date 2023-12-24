import './Header.css'
import home from './../../../src/assets/icon/house-fill.svg';
import logo from './../../../src/assets/icon/Attendance.png';

function Header() {
  return(
      <div className="MainHeader position-fixed" dir='rtl'>
      <div className='container position-relative d-flex justify-content-between h-100'>
        <div className='position-absolute h-100 pr-3'></div>
        
        <div className='w-100 d-lg-flex align-items-center'>
            <div className='main-menu ' dir='rtl'>
              <ul className='d-flex justify-content-center align-content-center list-unstyled p-0 m-0 h-100'>
                  <li><a href='/'><img src={home} alt='No image'/></a></li>
                  <li><a href='/'>کنترل تردد</a></li>
                  <li><a href='/'>نرم افزار</a></li>
                  <li><a href='/'>پشتیبانی</a></li>
                  <li><a href='/'>بلاگ</a></li>
                  <li><a href='/'>ارتباط با ما</a></li>
                  <li><a href='/'>درباره ما</a></li>       
              </ul>
            </div>    
        </div>  
        <div className='d-flex align-itemes-center' dir='rtl'>
            <div className='d-flex align-items-center'>
                <a href='#'><img src={logo} height='30' width='auto' alt='No-image'/></a>
            </div>
        </div>          
      </div>
    </div>
  )
  
}

export default Header;