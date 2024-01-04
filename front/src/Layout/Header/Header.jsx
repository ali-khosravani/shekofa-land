import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (

    <Navbar variant="dark" bg="dark" expand="md" fixed='top' className='MainHeader'>
      <Container fluid>
        <Navbar.Brand href="/">شکوفالند</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className='main-menu'>
            <NavDropdown
              id="nav-dropdown-Hardware"
              title="سخت افزار"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">گیت تردد</NavDropdown.Item>
              <NavDropdown.Item href="/">
                گیت بازرسی افراد
              </NavDropdown.Item>
              <NavDropdown.Item href="/">فلز یاب</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                سایر محصولات
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-software"
              title="نرم افزار"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">نرم افزار پارکینگ</NavDropdown.Item>
              <NavDropdown.Item href="/">
                نرم افزار حضور و غیاب
              </NavDropdown.Item>
              <NavDropdown.Item href="/">سلف غذاخوری</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                سایر نرم افزار ها
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Support'>پشتیبانی</Nav.Link>
            <Nav.Link href='/Blog'>بلاگ</Nav.Link>
            <Nav.Link href='/ContactUs' as="li">ارتباط با ما</Nav.Link>
            <Nav.Link href='/About'>درباره ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;