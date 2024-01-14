import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avator from '../Images/avator.png'
import { useState } from 'react';
import axios from 'axios';
const Login = () => {

    const [validated, setValidated] = useState(false);
    const [loginusername, setloginusername] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        axios.get(`http://localhost:8000/abc/login/${loginusername}/${loginpassword}`)
            .then(res => {
                console.log(res.data.status);
                // setfname(res.data.name);
                if (res.data.status === "success") {
                    window.alert("Login successfull");
                    localStorage.setItem("validatedUser", "true");
                    localStorage.setItem("validatedUserName", res.data.fname);
                    localStorage.setItem("validatedUserEmail",res.data.email);
                    window.location.reload();   
                }
                else {
                    window.alert("username or password not matched");
                    localStorage.removeItem("validatedUser");
                    localStorage.removeItem("validatedUserName");
                    window.location.reload();
                }
            }
            )
            .catch(err => {
                window.alert("username or password not matcheddddddd");
                localStorage.setItem("validatedUser", "false");
                localStorage.removeItem("validatedUserName");
                localStorage.removeItem("validatedUserEmail");
                console.log(err);
                window.location.reload();
            }
            )
    };


    
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit2}>
                <div class="imgcontainer">
                    <img src={avator} alt="Avatar" class="avatar" />
                </div>
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                onChange={(e) => setloginusername(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Password"
                            onChange={(e) => setloginpassword(e.target.value)}
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>



                <Form.Group className="mb-12">
                    <Form.Check
                        required
                        label="Remember me"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" className='col-md-12 btn-success' >Login</Button>
            </Form>

        </>
    )
}

export default Login
