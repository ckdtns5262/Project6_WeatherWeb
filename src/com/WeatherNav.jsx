import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

function WeatherNav() {
  return (  <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weather Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Main1">중기예보</Nav.Link>
            <Nav.Link href="/Main2">단기예보</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      </> );
}

export default WeatherNav; 
   