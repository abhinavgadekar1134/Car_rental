import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const CarUpdate = () => {
    const carrnamee = localStorage.getItem("carname");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [model, setmodel] = useState('');
    const [cartype, setcartype] = useState('');
    const [carmodel, setcarmodel] = useState('');
    const [rent, setrent] = useState('');
    const [fuel, setfuel] = useState('');
    const [price, setprice] = useState('');
    const [noSeats, setnoSeats] = useState('');
    const [desc, setdesc] = useState('');
    const [carimg, setcarimg] = useState('');
    const [cistat, setcistat] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/findcar/${carrnamee}`)
            .then(res => {
                console.log(res.data);
                setname(res.data.data.name);
                setmodel(res.data.data.model);
                setcartype(res.data.data.cartype);
                setcarmodel(res.data.data.carmodel);
                setrent(res.data.data.rent);
                setfuel(res.data.data.fuel);
                setprice(res.data.data.price);
                setnoSeats(res.data.data.noSeats);
                setdesc(res.data.data.desc);
                setcarimg(res.data.data.carimg);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, [carrnamee]);

    const handleSubmit = (event) => {
        let updata = {
            model: model,
            cartype: cartype,
            carmodel: carmodel,
            rent: rent,
            fuel: fuel,
            price: price,
            noSeats: noSeats,
            desc: desc,
            carimg:carimg
        }

        console.log(updata)
        axios({
            url:`${process.env.REACT_APP_BACKEND_LINK_IMG2}/updateCar/${carrnamee}`,
            method:'PUT',
            data:updata
            
        })
            .then(res => {
                console.log(res.data);
                window.alert("Data updated");
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/adminHome');
        setValidated(true);
    }

    return (
        <>
            <Header />

            <Form noValidate validated={validated} onSubmit={() => handleSubmit()}>
                <Container>

                    <Row>
                        <Col lg={6}>
                            <Form.Label>Carname</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter carname"
                                value={name}
                                onChange={(e) => { setname(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Model"
                                value={model}
                                onChange={(e) => { setmodel(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>car type</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter CarType"
                                value={cartype}
                                onChange={(e) => { setcartype(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Rent</Form.Label>
                            <Form.Control
                                required
                                type="Number"
                                placeholder="Enter Rent"
                                value={rent}
                                onChange={(e) => { setrent(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Fuel</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Fuel"
                                value={fuel}
                                onChange={(e) => { setfuel(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter Price"
                                value={price}
                                onChange={(e) => { setprice(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>No Of seat</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="EnterNO of seat"
                                value={noSeats}
                                onChange={(e) => { setnoSeats(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>

                            <Form.Label>Car Image: </Form.Label>
                            <img src={ carimg} style={{ padding: "20px" }} width='230' height='150' alt="car img" />

                            <Form.Control
                                required
                                type="file"
                                placeholder="Upload car image"
                                onChange={(e) =>{ setcarimg(e.target.files[0]); setcistat(true)}}
                            />
                        </Col>
                        <Col lg={6}>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" value={desc} rows="3" onChange={(e) => { setdesc(e.target.value) }}></textarea>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <Form.Group className="mb-3">
                    <Form.Check style={{ marginLeft: "70px" }}
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" style={{ marginLeft: "50px" }}>Update</Button>
            </Form>
        </>

    )
}

export default CarUpdate
