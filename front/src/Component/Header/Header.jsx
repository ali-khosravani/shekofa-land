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
                  <li><a href='/'><img src={home} /></a></li>
                  <li><a href='/'>نرم افزار</a></li>
                  <li><a href='/'>پارکینگ</a></li>
                  <li><a href='/'>کنترل تردد</a></li>
                  <li><a href='/'>حضور و غیاب</a></li>
                  <li><a href='/'>راهبند</a></li>
                  <li><a href='/'>سلف</a></li>
                  <li><a href='/'>حراست</a></li>
                  <li><a href='/'>X-Ray</a></li>         
              </ul>
              </div>    
          </div>  
          <div className='d-flex align-itemes-center' dir='rtl'>
              <div className='logo d-flex align-items-center'>
                  <a href='#'><img src={logo} height='30' width='auto' /></a>
              </div>
          </div>          
        </div>
      </div>
    )
    
}
export default Header;