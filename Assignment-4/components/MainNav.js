import Link from "next/link";
import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

export default function MainNav() {
  const router = useRouter();
  const [searchValue, setValue] = useState("");
  function submitForm(e) {
    e.preventDefault();
    router.push(`/artwork?title=true&q=${searchValue}`);
    setValue("");
  }
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-primary" expand="lg">
        <Container>
          <Navbar.Brand>Yuvraj Singh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link legacyBehavior passHref href="/">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link legacyBehavior passHref href="/search">
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>

            <Form className="d-flex" onSubmit={submitForm}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setValue(e.target.value)}
              />
              <Button className="btn btn-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
