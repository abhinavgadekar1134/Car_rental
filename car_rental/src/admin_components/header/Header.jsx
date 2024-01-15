import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    const adname = localStorage.getItem('adminname');
    const logout = ()=>{
        localStorage.removeItem('adminname');
        window.alert("Log out succeed");
        window.location.replace("http://localhost:3000/Admin");
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        
                        <FontAwesomeIcon icon={faCar} width="30"
                            height="30"
                            className="d-inline-block" />&nbsp;&nbsp;&nbsp;
                        Car Rental
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Link className='nav-link' to={"/adminHome"}>Home</Link>
                            <Link className='nav-link' to={"/ViewUsers"}>View Customers</Link>
                            <Link className='nav-link' to={"/BookDetails"}>View Bookings</Link>
                            <Link className='nav-link' to={"/ViewAdmins"}>View Admins</Link>
                            <Link className='nav-link' to={"/findallcontact"}>ContactsUs</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{adname}</a>
                        </Navbar.Text>
                        <Button onClick={logout} style={{ marginLeft: "30px" }}>Log Out</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
