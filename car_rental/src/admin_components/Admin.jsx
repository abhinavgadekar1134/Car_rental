import React, { useState } from 'react'
import Home from './Home/Home'
import axios from 'axios'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
const Admin = () => {
  
  const [uname, setuname] = useState('');
  const [upass, setupass] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    // navigate('/adminHome');

    axios.get(`https://car-backend-8cxh.onrender.com/abc/adminlogin/${uname}/${upass}`)
      .then(res => {
        console.log(res.data.status);
        // setfname(res.data.name);
        if (res.data.status === "success") {
          window.alert("Login successfull");
          // navigate('/adminHome');
          localStorage.setItem('adminname',res.data.mail);
          window.location.replace("http://localhost:3000/adminHome");

        }
        else {
          window.alert("username or password not matched");
        }
      }
      )
      .catch(err => {
        window.alert("username or password not matcheddddddd");
        console.log(err);
      }
      )
  }
  return (
    <>
      {/* <Home/> */}
      <div className='adminlogin'>
        <div class="login-container">
          <div class="login-form">
            <h2>Login</h2>
            {/* <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e) => { setuname(e.target.value) }} required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => { setupass(e.target.value) }} required />
              </div>
              <button type="submit">Login</button>
            </form> */}

            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={(e) => { setuname(e.target.value) }}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => { setupass(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
