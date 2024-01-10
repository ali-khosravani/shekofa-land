import './Footer.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function StickyFooter() {
    return (
        <Navbar variant='dark'  fixed='bottom' expand="md" className='StickyFooter'>
            <Container>
                <Navbar.Brand href="/">شکوفالند</Navbar.Brand>

                <Nav>
                    <div className="StickyFooter">
                        <p className='StickyFooter-p'>
                            تمامی حقوق برای شرکت <b>پوشش کالا پویان و پارسا</b> محفوظ است
                        </p>
                    </div>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default StickyFooter;