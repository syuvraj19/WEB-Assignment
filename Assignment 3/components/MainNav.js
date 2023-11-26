import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
const MainNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="">New York Citibike Trips</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link href="/">Full List</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link href="/about">About</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <br/>
    </>
  );
};

export default MainNav;
