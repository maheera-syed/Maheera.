import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='mt-5 bg-dark'>
      <Container>
        <Row>
          <Col className='text-center text-light mt-2'>
            <p>&copy; 2023 Maheera.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
