import React, { useEffect, useState } from "react";
import { Table, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from '../../actions/adminActions';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { deleteUser } from "../../apiCalls/admin";

function Allusers() {
  const [deleteUpdate, setDeleteUpdate] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersGet = useSelector(state => state.usersGet);
  const { detailsInfo } = usersGet;

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    setDeleteUpdate(prev => !prev);
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, deleteUpdate]);

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card border="white">
        <Card.Body>
          <div className="text-yellow-50">
            <div className="text-center">
              <h1 className="md:text-2xl sm:text-2xl text-2xl font-bold md:py-6">All Users</h1>
            </div>
            <div className="overflow-x-auto">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {detailsInfo && detailsInfo.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td><Link to={`/admin/EditUser/${user._id}`}><FiEdit color="orange" /></Link></td>
                      <td onClick={() => deleteUserDetails(user._id)}><RiDeleteBin5Fill color="red" /></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Allusers;
