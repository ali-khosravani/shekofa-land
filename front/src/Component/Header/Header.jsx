import { Link } from 'react-router-dom';
import './Header.css';
import * as Icon from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';



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
              id="nav-dropdown-dark-example"
              title="سخت افزار"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="نرم افزار"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Support'>پشتیبانی</Nav.Link>
            <Nav.Link href='/Blog'>بلاگ</Nav.Link>
            <Nav.Link href='/ContactUs'>ارتباط با ما</Nav.Link>
            <Nav.Link href='/About'>درباره ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;