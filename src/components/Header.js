import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-dark' variant={'dark'}>
        <Container>
          <Navbar.Brand href='#' className={'text-white'}>
            Maheera.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#' className={'text-white'}>
                Projects
              </Nav.Link>
              <Nav.Link href='#' className={'text-white'}>
                Reviews
              </Nav.Link>
              <NavDropdown
                title='Reviews'
                id='basic-nav-dropdown'
                className={'text-white'}
              >
                <NavDropdown.Item href='#action/3.2'>
                  Buyer Reviews
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Seller Reviews
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#' className={'text-white'}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
