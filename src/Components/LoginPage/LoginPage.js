
import React, { useState, useEffect} from 'react';

import {useNavigate}  from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ErrorMessage from '../ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../actions/userActions';


function LoginPage() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const dispatch=useDispatch();
const userLogin=useSelector((state)=>state.userLogin)
const {error,userInfo}=userLogin;
 
const navigate = useNavigate()
    
useEffect(() => {
    if(userInfo) {
        navigate('/home');
    }
}, [navigate, userInfo]);

  const handleLogin =async (event) => {
    event.preventDefault();
    dispatch(login(email,password))
  
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="login-box p-4 border rounded shadow-sm">
        <h1 className="text-center mb-4" style={{fontFamily:"-moz-initial" }}>Login</h1>
      
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email"
            value={email} 
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password" 
             value={password}
             placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}
             />
          </Form.Group>

          <Button variant="primary" type="submit" block className="mt-4">
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <span>New user? </span>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
