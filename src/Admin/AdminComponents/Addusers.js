import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {addUser} from '../../apiCalls/admin'
import { Container, Form, Button ,Card } from 'react-bootstrap';


const defaultValue = {
    name:'',
    email:'',
    password:''
}

function Addusers() {
    const [user, setuser] = useState(defaultValue);

    const navigate = useNavigate()

    const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value);
        setuser({ ...user,[e.target.name]: e.target.value});
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/admin/allUsers')
    }

  return (
    <Container className="p-4 mt-80 ml-16 mr-16 d-flex justify-content-center" >
    <Card className="w-96 border border-white" style={{width:'500px'}} >
      <Card.Body>
        <h2 className="text-white text-xl font-bold text-center mb-4">Add User</h2>
        <Form>
          <Form.Group className="text-gray-400" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => onValueChange(e)}
              name="name"
            />
          </Form.Group>
          <Form.Group className="text-gray-400" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              onChange={(e) => onValueChange(e)}
              name="email"
            />
          </Form.Group>
          <Form.Group className="text-gray-400" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e) => onValueChange(e)}
              name="password"
            />
          </Form.Group>
          <Button
          variant='outline-primary'
            className="w-100 mt-5 py-3 bg-yellow-600 shadow-lg text-white font-semibold rounded-lg"
            onClick={() => addUserDetails()}
          >
            ADD USER
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
  )
}

export default Addusers
