import React from 'react'
import './Bookc.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import Header from '../headerr/Header';
import pic1 from '../Images/1.jpeg';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
const Bookc = () => {
    const carrnamee = localStorage.getItem("carname");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    let val = localStorage.getItem("validatedUser");
    useEffect(() => {
        if (val === "true") {
        }
        else {
            window.alert("Please login for Booking ");
            navigate('/Home');
        }
    }, [val, navigate])




    const [name, setname] = useState('');
    const [model, setmodel] = useState('');
    const [cartype, setcartype] = useState('');
    const [rent, setrent] = useState('');
    const [fuel, setfuel] = useState('');
    const [price, setprice] = useState('');
    const [noSeats, setnoSeats] = useState('');
    const [desc, setdesc] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK}/findcar/${carrnamee}`)
            .then(res => {
                console.log(res.data);
                setname(res.data.data.name);
                setmodel(res.data.data.model);
                setcartype(res.data.data.cartype);
                setrent(res.data.data.rent);
                setfuel(res.data.data.fuel);
                setprice(res.data.data.price);
                setnoSeats(res.data.data.noSeats);
                setdesc(res.data.data.desc);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, [carrnamee]);

    const [usermail, setusermail] = useState(localStorage.getItem('validatedUserName'));
    const [username, setusername] = useState(localStorage.getItem('validatedUserEmail'));
    const [payment, setpayment] = useState(4 * rent);
    const [driver, setdriver] = useState('with_driver');
    const [hours, sethours] = useState('4');
    const [date, setdate] = useState('');
    const [contactno, setcontactno] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setpayment(hours * rent);
        const setdata = {

            usermail: usermail,
            carname: name,
            username: username,
            payment: payment,
            contactno: contactno,
            hours: hours,
            driver: driver,
            date: date,
            curdate: new Date().getTime()
        }

        axios.post(`${process.env.REACT_APP_BACKEND_LINK}/postbooking`, setdata)
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
                                <p>{desc}</p>

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
                            <div style={{ margin: "40px" }}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue={localStorage.getItem('validatedUserName')}
                                                onChange={(e) => setusername(e.target.value)}
                                                disabled
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
                                                    defaultValue={localStorage.getItem("validatedUserEmail")}
                                                    onChange={(e) => setusermail(e.target.value)}
                                                    disabled
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
                                            <Form.Control type="text" placeholder="Contact No" onChange={(e) => setcontactno(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid contact.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <Form.Label>Hours</Form.Label>
                                            <Form.Control type="number" max={168} min={4} defaultValue="4" style={{ style: "none !important" }} onChange={(e) => { sethours(e.target.value); setpayment(e.target.value * rent) }} placeholder="Enter hours you want" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please Enter hours you wanted minimum 4 and maximum 168.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <br /><Form.Label>Driving:</Form.Label><br />
                                            <input type="radio" name="gender" value="male" onChange={(e) => setdriver('with_driver')} checked /> With Driver&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="gender" value="female" onChange={(e) => setdriver('without_driver')} /> Without Driver
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <br /><Form.Label>Booking Date:</Form.Label>
                                            <Form.Control type="date" onChange={(e) => { setdate(e.target.value) }} placeholder="Enter date of booking you want" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please Enter booking date you wanted.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">

                                        <p style={{ color: "red", fontWeight: "900" }}>You need to pay ₹{hours * rent} for booking</p>
                                        <Form.Group className="mb-12">
                                            <Form.Check
                                                required
                                                label="Agree to terms and conditions"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                        <Button type="submit" className='btn-success'>Pay & Submit form</Button>
                                    </Row>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />

        </>
    )
}

export default Bookc
