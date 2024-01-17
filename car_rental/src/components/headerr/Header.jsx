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

  const [userstat, setuserstat] = useState(false);

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

  const signinn = () => {
    const para1 = document.getElementById("signupuser");
    para1.style.cssText = 'background-color: #f2f5f3 ; padding-top: 14px;  border-top: none;  border-bottom:1px solid #d7e0da;;';

    const para2 = document.getElementById("signinuser");
    para2.style.cssText = 'background-color: white; padding-top: 12px;  border-top: 2px solid rgb(1, 1, 117);  border-bottom:none;';
    setuserstat(false);
  }

  const signupp = () => {
    const para1 = document.getElementById("signinuser");
    para1.style.cssText = 'background-color: #f2f5f3 ; padding-top: 14px;  border-top: none;  border-bottom:1px solid #d7e0da;;';

    const para2 = document.getElementById("signupuser");
    para2.style.cssText = 'background-color: white; padding-top: 12px;  border-top: 2px solid rgb(1, 1, 117);  border-bottom:none;';
    setuserstat(true);
  }
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
          <span>Need Help? <FaPhone />&nbsp;Call:321-897-232-12 </span>
        </div>
        <div className='logreg'>


          {!validated && <button onClick={handleShow1} className='loginbtn' style={{ paddingTop:"4px",paddingLeft:"100px",background: "none", border: "none", color: "white" }} >
            <FaArrowRightFromBracket />&nbsp; Sign In</button>}
          {validated && <span style={{ paddingTop:"4px"}}>Welcome {uname}</span >}

          {validated && <button onClick={() => logout({})} style={{paddingTop:"4px", background: "none", border: "none", color: "white" }} >
            <FaArrowAltCircleDown />&nbsp; Log Out</button>}


          <Modal
            show={show1}
            onHide={handleClose1}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#f2f5f3"
            }}>
              <Modal.Title style={{ fontWeight: "100", fontSize: "15px", textAlign: "center", paddingLeft: "30%" }}>Please Login to continue</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modallsignin'>
                <div className='sign'>
                  <span id='signinuser' className='signin' onClick={signinn}>Sign In</span>
                  <span id='signupuser' className='signup' onClick={signupp}>Sign UP</span>
                </div>
                {!userstat && <Login />}
                {userstat && <Registration />}
              </div>
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
