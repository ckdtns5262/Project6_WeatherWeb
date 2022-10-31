import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//import { Link } from "react-router-dom";
function Nav1() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Router Practice</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Page1/h">page1</Nav.Link>
            <Nav.Link href="/Page2">page2</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 






    </>
  );
}

export default Nav1;
