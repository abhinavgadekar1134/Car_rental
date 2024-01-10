import React from 'react'
import './Login.css'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [password, setpassword] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [contactno, setcontact] = useState('');
    const [gender, setgender] = useState('');
    const [address, setaddress] = useState('');
    const handleSubmit = () => {
        
        const setdata = {
            fname: fname,
            lname: lname,
            password:password,
            dob: dob,
            email: email,
            contactno: contactno,
            gender: gender,
            address: address
        }

        axios.post('http://localhost:8000/abc/register', setdata)
            .then(res => {
                console.log(res.data);
                window.alert("You are successfully registered");
            })
            .catch((err) => {
                console.log(err);
            })
            setValidated(true);
        
    }

    return (
        <>
            <div >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                                value={fname}
                                onChange={(e) => setfname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                                value={lname}
                                onChange={(e) => setlname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                defaultValue=""
                                value={password}
                                style={{padding:"5px",paddingLeft:"12px"}}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="DOB"
                                value={dob}
                                onChange={(e) => setdob(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Contact number"
                                value={contactno}
                                onChange={(e) => setcontact(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Gender</Form.Label>
                            <br />
                            <input type="radio" name='gender' onChange={(e) => setgender('Male')} />Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name='gender' onChange={(e) => setgender('Female')} />Female

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button type="submit">Register</Button>
                </Form>
            </div>
        </>
    )
}

export default Registration
