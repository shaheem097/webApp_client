import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

function Header() {

  const navigate=useNavigate();

  const dispatch=useDispatch()

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin;

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: JSON.parse(storedUserInfo) });
    }
  }, [dispatch]);

  const logoutHandler=()=>{
    dispatch(logout())
    navigate('/login')
  }
  return (

    <Navbar expand="lg" bg="dark" variant="dark" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand>
        
        
        <Nav.Link  className="nav-link">
        COSMOS
        </Nav.Link>
         </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

      <Nav className='m-auto'>
            <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
     
        </Form>
            </Nav>
            <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
           
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login/Register
              </Nav.Link>
            )}
          </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
