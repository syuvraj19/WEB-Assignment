import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link"

function MainNav() {
  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary fixed-top  bg-dark">
      <Container>
        <Navbar.Brand>Yuvraj Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link href="/" passHref>
                <Nav.Link as="div">Companies</Nav.Link>
            </Link>
          
          <Link href="/about" passHref>
                <Nav.Link as="div">About</Nav.Link>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />

    <br />
    </div>
  );
}

export default MainNav;
