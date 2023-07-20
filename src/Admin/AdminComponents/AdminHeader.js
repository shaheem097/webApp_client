import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {

  
const navigate=useNavigate()

const handleLogout = () => {
  localStorage.removeItem("adminInfo");
 navigate('/admin/logout');
};

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Link to="/admin" className="navbar-brand">Admin Dashboard</Link>
        <Nav className="mr-auto">
          <Navbar.Text>Hello, Admin</Navbar.Text>
        </Nav>
        <Nav>
       
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
