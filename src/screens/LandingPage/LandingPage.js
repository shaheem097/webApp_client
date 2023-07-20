import React from 'react';
import './LandingPage.css';
import { Button, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <div className="main d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      <Container>
        <Row className="text-center">
          <h1>Welcome To Shaheem's World</h1>
          <div className="button-container">
          <Link to='/login'>
            <Button className="login-button">Login</Button>
          </Link>
        <Link to='/register'>
            <Button className="signup-button">Signup</Button>
        </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
