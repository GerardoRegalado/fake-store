import React from 'react'
import './HeaderComponent.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

function HeaderComponent() {
  return (
    <>
      <Navbar  className='navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='title-header'>Fake Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Hot Products</Nav.Link>
            <Nav.Link href="#pricing">Sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent