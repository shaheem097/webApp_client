import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {login} from '../../actions/adminActions'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const adminLogin = useSelector(state => state.adminLogin);
  const { adminInfo} = adminLogin;

  const navigate = useNavigate()

  useEffect(() => {
      if(adminInfo) {
          navigate('/admin');
      }
  },[navigate,adminInfo]);

  const submitHandler = async(e) => {
      e.preventDefault();
      dispatch(login(email,password));
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="box border border-warning p-4">
        <h2 className="mb-4">Admin Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid" style={{paddingTop:'20px'}}>
            <Button variant="primary" type="submit">
              Login 
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default AdminLogin;
