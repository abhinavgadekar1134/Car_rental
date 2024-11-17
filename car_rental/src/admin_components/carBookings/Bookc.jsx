import React from 'react'
import Header from '../header/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pic1 from '../Images/1.jpeg';
import './Bookc.css'
import { Form,InputGroup } from 'react-bootstrap';
const Bookc = () => {
    const carrnamee = localStorage.getItem("carname");
    const [validated, setValidated] = useState(false);

    const [name, setname] = useState('');
    const [model, setmodel] = useState('');
    const [cartype, setcartype] = useState('');
    const [carmodel, setcarmodel] = useState('');
    const [rent, setrent] = useState('');
    const [fuel, setfuel] = useState('');
    const [price, setprice] = useState('');
    const [noSeats, setnoSeats] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/findcar/${carrnamee}`)
            .then(res => {
                const setdata = res.data.data;
                console.log(res.data);
                setname(res.data.data.name);
                setmodel(res.data.data.model);
                setcartype(res.data.data.cartype);
                setcarmodel(res.data.data.carmodel);
                setrent(res.data.data.rent);
                setfuel(res.data.data.fuel);
                setprice(res.data.data.price);
                setnoSeats(res.data.data.noSeats);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, []);

    const [usermail,setusermail] = useState('');
    const [username ,setusername ] = useState('');
    const [payment ,setpayment ] = useState('500');
    const [ source,setsource ] = useState('');
    const [ destination,setdestination ] = useState('');

    const handleSubmit = () => {

        const setdata = {

            usermail:usermail,
            carname:name,
            username:username,
            carname:name,
            payment:payment
        }

        axios.post(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/postbooking`, setdata)
            .then(res => {
                console.log(res.data);
                window.alert("Your car is Booked");
            })
            .catch((err) => {
                console.log(err);
            })
        setValidated(true);

    }
    return (
        <>
            <Header />
            <div>
                <h4 className='text-center'>Book Car</h4>
                <Container>
                    <Row>
                        <Col mb={6}>
                            <div style={{ width: "50%", margin: "auto" }}>
                                <img src={pic1} width={"500px"} alt="" />
                                <h5>Car Name: {name}</h5>

                                <h5>Description:</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima, nesciunt nam perferendis iusto autem provident atque possimus inventore fuga corporis nisi quae numquam iste facere, dolorum, minus repellat. Neque!</p>

                            </div>
                        </Col>
                        <Col mb={6}>
                            <div>
                                <table className='table' style={{ width: "60%", margin: "auto" }}>
                                    <tr>
                                        <td>Car Name: </td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Model: </td>
                                        <td>{model}</td>
                                    </tr>
                                    <tr>
                                        <td>Type: </td>
                                        <td>{cartype}</td>
                                    </tr>
                                    <tr>
                                        <td>Rent: </td>
                                        <td>₹{rent}&nbsp;/hr</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel: </td>
                                        <td>{fuel}</td>
                                    </tr>
                                    <tr>
                                        <td>Price: </td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td>Seats: </td>
                                        <td>{noSeats}</td>
                                    </tr>

                                </table>
                            </div>
                            <div style={{margin:"40px"}}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                onChange={(e)=>setusername(e.target.value)}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Email"
                                                    aria-describedby="inputGroupPrepend"
                                                    onChange={(e)=>setusermail(e.target.value)}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a email.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                
                                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                                            <Form.Label>Contact No</Form.Label>
                                            <Form.Control type="text" placeholder="Contact No"  required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid contact.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <Form.Label>Payment</Form.Label>
                                            <Form.Control type="number" min={500} style={{style:"none !important" }} onChange={(e)=>setpayment(e.target.value)} defaultValue="500" placeholder="Payment" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid payment.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Button type="submit">Pay & Submit form</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Bookc
