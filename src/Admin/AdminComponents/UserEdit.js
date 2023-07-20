import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Table, Card } from 'react-bootstrap';
import { editUser, getUserId } from "../../apiCalls/admin";

const defaultValue = {
  name: '',
  email: '',
  password: ''
};

function UserEdit() {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const res = await getUserId(id);
    setUser(res.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/admin/allUsers');
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card border="white" bg="light" style={{width:'600px'}}>
        <Card.Body>
          <h2 className="text-center mb-4">Edit User</h2>
          <div className="table-responsive">
            <Table striped bordered hover size="sm" className="m-auto">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={(e) => onValueChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={(e) => onValueChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={(e) => onValueChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <Button variant="primary" onClick={editUserDetails}>
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserEdit;
