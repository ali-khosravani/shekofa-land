import './Header.css'
import home from './../../../src/assets/icon/house-fill.svg';


function Header() {
  return (
    <nav class='navbar navbar-expand-md fixed-top'>
      <div class="container-fluid pt-5">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="MainHeader collapse navbar-collapse">
          <div className='container position-relative d-flex justify-content-between h-100'>            
              <div className='main-menu ' dir='rtl'>
                <ul className='d-flex list-unstyled navbar-nav'>
                  <li className='nav-item'><a href='/'><img src={home} alt='Home' width={24} height={24}/></a></li>
                  <li className='nav-item'><a href='/'>کنترل تردد</a></li>
                  <li className='nav-item'><a href='/'>نرم افزار</a></li>
                  <li className='nav-item'><a href='/'>پشتیبانی</a></li>
                  <li className='nav-item'><a href='/'>بلاگ</a></li>
                  <li className='nav-item'><a href='/'>ارتباط با ما</a></li>
                  <li className='nav-item'><a href='/'>درباره ما</a></li>
                </ul>
              </div>
            </div>          
          </div>
        </div>
    </nav>
  )

}

export default Header;