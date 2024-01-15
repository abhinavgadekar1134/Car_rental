import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import React from 'react';
import axios from 'axios';
import Header from '../headerr/Header';
import Footer from '../Footer/Footer';
function Contact() {
  const [fname, setfname] = useState("");
  const [lname,setlname] = useState("");
  const [email,setemail] = useState("");
  const [city,setcity] = useState("");
  const [state,setstate] = useState("");
  const [contactno,setcontactno] = useState("");
  const [suggestion,setsuggestion] = useState("");
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const setdata = {
      fname:fname,
      lname:lname,
      email:email,
      city:city,
      state:state,
      contactno:contactno,
      suggestion:suggestion
    };

    
    axios.post(`${process.env.REACT_APP_BACKEND_LINK}/postcontact`, setdata)
      .then((res) => {
        console.log(res.data);
        window.alert('Form submitted')
      })
      .catch((e) => {
        console.log(e);
      })


    event.preventDefault();
    event.stopPropagation();
      
    setValidated(true);
  };
  return (
    <>
      <Header />

      <div className='mb-6' style={{ width: "50%", margin: "auto",border:"1px solid black",padding:"20px" }}>
        <h3 style={{textAlign:"center"}}>Contact Us</h3>
        <Form noValidate id='contact' validated={validated} onSubmit={handleSubmit} style={{marginTop:"30px"}}>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => setfname(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(e) => setlname(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Contact NO </Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Contact no"
                onChange={(e) => setcontactno(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" onChange={(e) => setcity(e.target.value)} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" onChange={(e) => setstate(e.target.value)} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            
            
            
          </Row>
          <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Suggestion</Form.Label>
              <Form.Control placeholder="Suggestion" as="textarea" onChange={(e) => setsuggestion(e.target.value)} required />
              <Form.Control.Feedback type="invalid">
                Please provide a Suggestion.
              </Form.Control.Feedback>
            </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit" onClick={handleSubmit}>Submit form</Button>
        </Form>
        </div>
      <Footer/>
    </>
  );
}

export default Contact;