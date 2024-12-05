import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avator from '../Images/avator.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [validated, setValidated] = useState(false);
    const [loginusername, setloginusername] = useState('');
    const [loginpassword, setloginpassword] = useState('');
    const navigate = useNavigate();
    const handleadmin = (event)=>{
        navigate('/Admin');
    }
    const handleSubmit2 = (event) => {
       
      event.preventDefault();
      event.stopPropagation();
   

    setValidated(true);

        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/login/${loginusername}/${loginpassword}`)
            .then(res => {
                console.log(res.data.status);
                // setfname(res.data.name);
                if (res.data.status === "success") {
                    window.alert("Login successfull");
                    localStorage.setItem("validatedUser", "true");
                    localStorage.setItem("validatedUserName", res.data.fname);
                    localStorage.setItem("validatedUserEmail",res.data.email);
                    navigate('/')
                }
                else {
                    window.alert("username or password not matched");
                    localStorage.removeItem("validatedUser");
                    localStorage.removeItem("validatedUserName");
                    navigate('/')
                }
            }
            )
            .catch(err => {
                window.alert("username or password not matcheddddddd");
                localStorage.setItem("validatedUser", "false");
                localStorage.removeItem("validatedUserName");
                localStorage.removeItem("validatedUserEmail");
                console.log(err);
                navigate('/')
            }
            )
    };


    
    return (
        <>
        <div style={{padding:"0px 40px 0px 40px"}}>
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
                                placeholder="Username or email"
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
                            type="password"
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
            <button className='btnloginnn' onClick={handleadmin}>Log in as admin</button>
            </div>
        </>
    )
}

export default Login
