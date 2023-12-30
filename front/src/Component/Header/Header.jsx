import { Link } from 'react-router-dom';
import './Header.css'
import home from './../../../src/assets/icon/house-fill.svg';

function Header() {
  return (
    <nav className='navbar fixed-top navbar-expand-sm'>
      <div className="container-fluid">
        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">          
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav className='MainHeader collapse navbar-collapse navbar nav-col' id="navbarToggleExternalContent" >
          <div className='main-menu  pt-4'  dir='rtl'>
            <ul className='d-flex list-unstyled navbar-nav'>
              <li className='nav-item'><Link to="/" className='active'><img src={home} alt='Home' width={24} height={24} /></Link></li>
              <li className='nav-item'><Link to='/Attendance'>کنترل تردد</Link></li>
              <li className='nav-item'><Link to='/Software'>نرم افزار</Link></li>
              <li className='nav-item'><Link to="/Support">پشتیبانی</Link></li>
              <li className='nav-item'><Link to="/Blog">بلاگ</Link></li>
              <li className='nav-item'><Link to="/ContactUs">ارتباط با ما</Link></li>
              <li className='nav-item'><Link to="/About">درباره ما</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default Header;