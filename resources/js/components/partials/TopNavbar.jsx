import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className='shadow-sm'>
        <Container>
          <Navbar.Brand href="#home" className='fw-bold'>CRUD APP</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="">Home</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default TopNavbar