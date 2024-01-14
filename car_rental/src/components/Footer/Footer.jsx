import React from 'react'

import './Footer.css'
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <>
            <div class="card text-center" style={{ backgroundColor: "rgb(7, 8, 71)", borderRadius: "0%" }}>
                <div class="card-header">
                </div>
                <div class="card-body" style={{ color: "white", }}>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <h3>Head Office</h3>
                                <p>Near, Pune - Nashik Hwy, Sangamner,<br /> Ghulewadi, Maharashtra 422608 </p>
                            </Col>
                            <Col lg={4}>
                                <h5 class="card-title">Want to know more?</h5>
                                <p class="card-text">Click Below to Contact</p>
                                <a href="#e" class="btn btn-primary">Contact Us</a>
                                <br /><br />
                                <div className="social-media-link">
                                <ul className='ssss'>
                                    <li><FaWhatsapp  style={{color:"green"}}/></li>
                                    <li><FaInstagram  style={{color:"rgb(228, 64, 95)"}}/></li>
                                    <li><IoMdCall  style={{color:"blue"}}/></li>
                                    <li><MdEmail style={{color:"red"}}/></li>
                                </ul>
                                </div>

                            </Col>

                            <Col lg={4}>
                                <div style={{ marginLeft:'auto',marginRight:'auto' }}>
                                    <h3>Help</h3>
                                    <a href="#e" style={{ color: "white", textDecoration: "none" }}>help</a><br />
                                    <a href="#e" style={{ color: "white", textDecoration: "none" }}>Contact us</a><br />
                                    <a href="#e" style={{ color: "white", textDecoration: "none" }}>Any Query</a><br />
                                    <a href="#e" style={{ color: "white", textDecoration: "none" }}>Support</a><br />
                                    <a href="#e" style={{ color: "white", textDecoration: "none" }}>Troubleshooting</a><br />

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <i class="fas fa-band-aid"></i> */}

                </div>
            </div>
            <div className="foot" style={{ borderRadius: "0%" }}>
                <p>© Copyright 2023 . All Rights Reserved.    Abhinav Gadekar ,Prakash Bhabad ,Pranav Deshmukh ,Pranav Ekhande ,Parth Deshmukh</p>
                <p></p>
            </div>
        </>
    )
}

export default Footer
