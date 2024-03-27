// NavigationBar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      
    </Navbar>
  );
}

export default NavigationBar;
