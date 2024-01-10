import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Registration from '../login/Registration';
import Login from '../login/Login';
import { FaArrowAltCircleDown, FaPhone, FaUser } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const Header = () => {

  const navigate = useNavigate();
  const uname = localStorage.getItem("validatedUserName");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  let val = localStorage.getItem("validatedUser");

  const [validated, setvalidated] = useState('');
  useEffect(() => {
    if (val === "true") {
      setvalidated(true);
      handleClose1();
    }
    else {
      setvalidated(false);
    }
  }, [val]);

  const logout = () => {

    if (window.confirm("Are you sure to log out")) {
      setvalidated(false);
      localStorage.removeItem("validatedUser", "false");
      localStorage.removeItem("validatedUserName", "");
      localStorage.removeItem("validatedUserEmail");
      localStorage.removeItem("useremail");
      navigate('/Home');
    } else {
    }


  }

  return (
    <>
      <div className='head'>
        <div className='con'>
          <span>Need Help? <FaPhone />&nbsp;&nbsp;Call:321-897-232-12 </span>
        </div>
        <div className='logreg'>
          {!validated && <Button variant="primary" onClick={handleShow2} style={{ background: "none", border: "none", color: "white" }}>
            <FaUser className='head-icon' />  &nbsp;Register
          </Button>}
          <Modal
            show={show2}
            onHide={handleClose2}
            keyboard={false}
            centered
          >
          {/* <Modal
            show={show2}
            onHide={handleClose2}
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          > */}
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Registration />
            </Modal.Body>

          </Modal>
          {!validated && <Button onClick={handleShow1} style={{ background: "none", border: "none", color: "white" }} >
            <FaArrowRightFromBracket />&nbsp; Login
          </Button>}
          {validated && <span style={{ marginRight: "20px" }}>Welcome {uname}</span >}

          {validated && <button onClick={() => logout({})} style={{ background: "none", border: "none", color: "white" }} >
            <FaArrowAltCircleDown />&nbsp; Log Out
          </button>}


          <Modal
            show={show1}
            onHide={handleClose1}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login />
            </Modal.Body>

          </Modal>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Car Rental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Link className='nav-linkss' to={"/Home"}>Home</Link>
              <Link className='nav-linkss' to={"/About"}>About</Link>
              <Link className='nav-linkss' to={"/CarsPage"}>Cars</Link>
              <Link className='nav-linkss' to={"/Blog"}>Blog</Link>
              <Link className='nav-linkss' to={"/Contact"}>Contact</Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  )
}

export default Header
