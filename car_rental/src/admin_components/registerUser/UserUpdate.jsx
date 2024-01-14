import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {  useNavigate } from 'react-router-dom';

const UserUpdate = (props) => {
    const [validated, setValidated] = useState(false);
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [password, setpassword] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [contact, setcontact] = useState('');
    const [gender, setgender] = useState('');
    const [address, setaddress] = useState('');

    const navigate=useNavigate();
    const emailid = localStorage.getItem("useremail")
    
    const handleSubmit = (event) => {
        const updata = {
            fname: fname,
            lname: lname,
            password:password,
            dob: dob,
            email: email,
            contactno: contact,
            gender: gender,
            address: address
        }
        axios.put(`https://car-backend-8cxh.onrender.com/abc/update/${emailid}`, updata)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });


        setValidated(true);
        window.alert("Data Updated")
        navigate('/ViewUsers');
    }
    useEffect(() => {

        axios.get(`https://car-backend-8cxh.onrender.com/abc/finduser/${emailid}`)
            .then(res => {
                console.log(res.data);
                setfname(res.data.fname);
                setlname(res.data.lname);
                setpassword(res.data.password);
                setdob(res.data.dob);
                setemail(res.data.email);
                setcontact(res.data.contactno);
                setgender(res.data.gender);
                setaddress(res.data.address);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, [emailid]);


    return (
        <>
        
            <div style={{ margin: "auto", width: "50%", marginTop: "30px" }}>
            <h1 className='text-center'>User Updation Form</h1>
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
                            onChange={(e) => setcontact(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            placeholder="phone"
                            value={email}
                            onChange={(e) => setcontact(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Contact number"
                            value={contact}
                            onChange={(e) => setcontact(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Gender"
                            value={gender}
                            onChange={(e) => setcontact(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setcontact(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button type="submit">Update</Button>
            </Form>
            </div>

        </>
    )
}

export default UserUpdate
