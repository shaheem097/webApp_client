import React from 'react'
import './HomePage.css'

import {  Container, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="main d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
    <Container>
      <Row className="text-center">
        <h1>This is Home Page</h1>
        <div className="button-container">
        
        </div>
      </Row>
    </Container>
  </div>
  )
}

export default HomePage
