import { Link } from 'react-router-dom';
import './Header.css'
import home from './../../../src/assets/icon/house-fill.svg';



function Header() {
  return (
    <nav className='navbar  fixed-top navbar-expand-sm'>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#collapsibleNavbar"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="MainHeader collapse navbar nav-col navbar-collapse" id="collapsibleNavbar" >          
            <div className='main-menu pt-3' dir='rtl'>
              <ul className='d-flex list-unstyled navbar-nav'>
                <li className='nav-item'><a href='/' className='active'><img src={home} alt='Home' width={24} height={24} /></a></li>
                <li className='nav-item'><a href='/'>کنترل تردد</a></li>
                <li className='nav-item'><a href='/'>نرم افزار</a></li>
                <li className='nav-item'><a href='/'>پشتیبانی</a></li>
                <li className='nav-item'><a href='/'>بلاگ</a></li>
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