import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleAllUsers = () => {
    navigate('/admin/allUsers');
  };

  const handleAddUsers = () => {
   navigate('/admin/addUsers');
  };

  return (
    <Container className="text-white d-flex align-items-center justify-content-center vh-100">
      <Card className="p-4 border border-white">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" style={{ fontFamily: 'emoji', fontWeight: 'bold' }}>
            Admin Dashboard
          </h1>
        <div className="d-grid gap-2" style={{paddingTop:'80px'}}>
        
          <Button variant="outline-primary" size='lg'onClick={handleAllUsers}>
            All Users
          </Button>
          <Button variant="outline-primary" size='lg' onClick={handleAddUsers}>
            Add Users
          </Button>
        </div>
      
      </Card>
    </Container>
  );
}

export default AdminDashboard;
