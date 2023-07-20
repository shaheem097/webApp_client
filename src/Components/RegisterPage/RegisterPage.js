import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './RegisterPage.css'
import {Link} from 'react-router-dom'
import ErrorMessage from '../ErrorMessage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
   const navigate = useNavigate() 

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [profilePicture, setProfilePicture] = useState(null);
  const [password , setPassword] = useState("")
  const [confirmpassword , setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null) 
  const [error, setError] = useState(false);
  const handleRegister = async(event) => {
    event.preventDefault();

    if(password!==confirmpassword){
        setMessage('password do not match')
    }  else{
        setMessage(null)
           try {
            const config={
                headers:{
                    "Content-type":"application/json"
                }
            }
          
      
            const { data } = await axios.post('http://localhost:5000/api/users/register', {
                name,
                email,
                password,
                profilePicture,
              }, config);
              console.log(data);
              localStorage.setItem("userInfo",JSON.stringify(data))
              navigate('/login')
           } catch (error) {

            setError(error.message)
           }
    }

  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="register-box p-4 border rounded shadow-sm">
        <div className="text-center mb-3">
          {profilePicture && (
            <div className="profile-picture-preview">
              <img src={URL.createObjectURL(profilePicture)} alt="Selected Profile" className="rounded-circle profile-picture" />
            </div>
          )}
        </div>

        <h1 className="text-center mb-4">Register</h1>

        {message &&<ErrorMessage >{message}</ErrorMessage>}
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
            value={name}
            placeholder="Enter your name" 
            onChange={(e)=>setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
             value={email}
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
            value={password}
             placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}
             />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password"
            value={confirmpassword}
            placeholder="Confirm password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicProfilePicture">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" onChange={handleProfilePictureChange} />
          </Form.Group>

          <Button variant="primary" type="submit" block className="mt-4">
            Register
          </Button>
        </Form>
        <div className="text-center mt-3">
          <span>Have an account</span>
          <Link to="/login">  Login here</Link>
        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;


