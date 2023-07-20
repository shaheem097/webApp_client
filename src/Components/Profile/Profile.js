import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../actions/userActions';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4-mDP7ASPc4Gi94gLdvOs8RHqdT7pPXpLUujsq8OTeCpCKUp43WZEgHc0dP4qqpjXWE&usqp=CAU');
  const [previewImage, setPreviewImage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUserData] = useState({});
   
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo,"aaaaaaaaaabbbbbbbbbbb");

  
  useEffect(() => {
    if (!userInfo) {
   
    } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
        setProfilePicture(userInfo.pic);
    }
}, [userInfo]);

  const userUpdate = useSelector((state) => state.userUpdate);
  const { error, success } = userUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email, password, pic: selectedImage }));
    navigate('/home')
  };

  const fileInputRef = useRef(null);

  const handleEditIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="profile-box p-4 border rounded-lg" style={{ width: '400px',borderRadius:'10px' }}>
        <div className="text-center">
          <div className="profile-picture mt-3">
            <img
              src={previewImage || profilePicture}
              alt="Profile Picture"
              className="rounded-circle"
              style={{ width: '100px', height: '100px', marginLeft: '120px' }}
            />
            <div className="edit-icon" onClick={handleEditIconClick} style={{ marginLeft: '200px' }}>
              <AiOutlineEdit />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <Form  style={{paddingTop:'50px'}} onSubmit={submitHandler}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="form-control-sm"
              value={name}
               defaultValue={user.name}
               onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="form-control-sm"
              value={email} 
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              className="form-control-sm"
              value={password} 
              defaultValue={user.password}
              onChange={(e) => setPassword(e.target.value)}
           
            />
          </Form.Group> */}

          {/* <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              className="form-control-sm"
              value={confirmpassword} 
              defaultValue={user.confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
           
            />
          </Form.Group> */}

          <div className="d-flex justify-content-center" style={{paddingTop:'50px'}}>
            <Button variant="primary" type="submit" className="btn-sm" >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Profile;
